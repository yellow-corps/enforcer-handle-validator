import BaseRule from "./baseRule";

export default <BaseRule>{
  title: "Handle is too short",
  description: "A handle is shorter than 3 characters.",
  filename: "tooShort",
  hasContext: false,

  checkHandles: (handles) =>
    handles
      .map((handle, position) => ({ position, handle }))
      .filter(({ handle }) => handle.length < 3),
};
