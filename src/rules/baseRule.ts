export default interface BaseRule {
  title: string;
  description: string;
  filename: string;
  hasContext: boolean;
  checkHandles(
    handles: string[]
  ): { position: number; handle: string; context: string }[];
}
