export default interface BaseRule {
  title: string;
  description: string;
  level: "error" | "warning";
  checkHandles(handles: string[]): { handle: string; context: string }[];
}
