import BaseRule from "./baseRule";

const VALID_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_ ";

export default <BaseRule>{
  title: "Handle contains spaces",
  description:
    "A handle contains spaces, which may be invalid in some situations. Consider replacing with an underscore.",
  filename: "replaceSpacesWithUnderscores",
  hasContext: true,

  checkHandles: (handles) =>
    handles
      .map((handle, position) => ({ position, handle }))
      .filter(
        ({ handle }) =>
          handle.includes(" ") &&
          handle.split("").some((character) => VALID_CHARS.includes(character))
      )
      .map(({ position, handle }) => ({
        position,
        handle,
        context: `Replace with: ${handle.replaceAll(" ", "_")}`
      }))
};
