import toSpliced from "array.prototype.tospliced";
import sanitiseHandle from "../utils/sanitiseHandle";
import BaseRule from "./baseRule";
import { diceCoefficient } from "dice-coefficient";

const LOW_THRESHOLD = 0.8;
const HIGH_THRESHOLD = 0.9;

export default <BaseRule>{
  title: "Handle is similar to another handle",
  description: "A handle is similar to another handle and may cause confusion.",
  level: "error",

  checkHandles: (handles) => {
    const handleMap = handles.map((handle) => ({
      original: handle,
      sanitised: sanitiseHandle(handle),
    }));

    return handleMap
      .map(({ original, sanitised }, index) => {
        const duplicates = toSpliced(handleMap, index, 1)
          .map(({ original: otherOriginal, sanitised: otherSanitised }) => ({
            other: otherOriginal,
            similarity: diceCoefficient(sanitised, otherSanitised),
          }))
          .filter(({ similarity }) => similarity >= LOW_THRESHOLD);

        return duplicates.length
          ? {
              handle: original,
              context: duplicates
                .map(
                  ({ other, similarity }) =>
                    `${similarity >= HIGH_THRESHOLD ? "VERY similar" : "Similar"} to ${other}`,
                )
                .join(", "),
            }
          : null;
      })
      .filter(Boolean);
  },
};
