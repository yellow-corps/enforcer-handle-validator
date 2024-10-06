import { Profanity } from "@2toad/profanity";
import BaseRule from "./baseRule";
import sanitiseHandle from "../utils/sanitiseHandle";

const profanity = new Profanity({ languages: ["en"], wholeWord: false });

export default <BaseRule>{
  title: "Handle may contain profanity",
  description: "Some of a handle may contain swear words or slurs.",
  level: "warning",

  checkHandles: (handles) =>
    handles
      .map((handle) => ({
        original: handle,
        sanitised: sanitiseHandle(handle),
      }))
      .filter(({ sanitised }) => profanity.exists(sanitised))
      .map(({ original: handle }) => ({ handle })),
};
