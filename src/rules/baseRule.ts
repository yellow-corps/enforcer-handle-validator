export default interface BaseRule {
  title: string;
  description: string;
  filename: string;
  hasContext: boolean;
  checkHandles(handles: string[]): { handle: string; context: string }[];
}
