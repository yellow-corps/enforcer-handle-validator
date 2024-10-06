import BaseRule from "./baseRule";

const VALID_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_ ";

export default <BaseRule>{
  title: "Handle contains invalid characters",
  description:
    "A handle should only contain letters, numbers, and underscores.",
  level: "error",

  checkHandles: (handles) =>
    handles
      .filter((handle) =>
        handle.split("").some((character) => !VALID_CHARS.includes(character)),
      )
      .map((handle) => ({ handle })),
};
