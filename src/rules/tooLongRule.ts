import BaseRule from "./baseRule";

export default <BaseRule>{
  title: "Handle is too long",
  description: "A handle is longer than 20 characters.",
  filename: "tooLong",
  hasContext: false,

  checkHandles: (handles) =>
    handles
      .map((handle, position) => ({ position, handle }))
      .filter(({ handle }) => handle.length > 20),
};
