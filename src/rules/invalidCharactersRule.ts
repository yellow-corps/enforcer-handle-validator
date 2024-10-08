import BaseRule from "./baseRule";

const VALID_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_ ";

export default <BaseRule>{
  title: "Handle contains invalid characters",
  description:
    "A handle should only contain letters, numbers, and underscores.",
  filename: "invalidCharacters",
  hasContext: true,

  checkHandles: (handles) =>
    handles
      .map((handle) => {
        const invalidCharacters = [
          ...new Set(
            handle
              .split("")
              .filter((character) => !VALID_CHARS.includes(character))
          )
        ].join("");

        if (!invalidCharacters.length) {
          return null;
        }

        return { handle, context: `Invalid characters: ${invalidCharacters}` };
      })
      .filter(Boolean)
};
