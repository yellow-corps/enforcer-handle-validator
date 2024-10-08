import toSpliced from "array.prototype.tospliced";
import sanitiseHandle from "../utils/sanitiseHandle";
import BaseRule from "./baseRule";
import { diceCoefficient } from "dice-coefficient";

enum Threshold {
  LOW = 0.8,
  HIGH = 0.9,
  EXACT = 1,
}

function thresholdToLabel(similarity: number) {
  if (similarity === Threshold.EXACT) {
    return "EXACTLY";
  } else if (similarity >= Threshold.HIGH) {
    return "VERY similar to";
  }
  return "Similar to";
}

export default <BaseRule>{
  title: "Handle is similar to another handle",
  description: "A handle is similar to another handle and may cause confusion.",
  filename: "duplicate",
  hasContext: true,

  checkHandles: (handles) => {
    const handleMap = handles.map((handle, position) => ({
      position,
      original: handle,
      sanitised: sanitiseHandle(handle),
    }));

    return handleMap
      .map(({ position, original, sanitised }, index) => {
        const duplicates = toSpliced(handleMap, index, 1)
          .map(({ original: otherOriginal, sanitised: otherSanitised }) => ({
            other: otherOriginal,
            similarity: diceCoefficient(sanitised, otherSanitised),
          }))
          .filter(({ similarity }) => similarity >= Threshold.LOW);

        return duplicates.length
          ? {
              position,
              handle: original,
              context: duplicates
                .map(
                  ({ other, similarity }) =>
                    `${thresholdToLabel(similarity)} ${other}`,
                )
                .join(", "),
            }
          : null;
      })
      .filter(Boolean);
  },
};
