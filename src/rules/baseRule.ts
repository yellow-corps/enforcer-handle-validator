export default interface BaseRule {
  title: string;
  description: string;
  checkHandles(handles: string[]): { handle: string; context: string }[];
}
