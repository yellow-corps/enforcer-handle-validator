declare module "array.prototype.tospliced" {
  export default function toSpliced<T>(
    array: T[],
    start: number,
    deleteCount?: number,
    ...items: T[]
  ): T[];
}
