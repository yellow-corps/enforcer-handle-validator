import BaseRule from "./baseRule";

export default <BaseRule>{
  title: "Handle is too long",
  description: "A handle is longer than 20 characters.",
  level: "error",

  checkHandles: (handles) =>
    handles
      .filter((handle) => handle.length > 20)
      .map((handle) => ({ handle })),
};
