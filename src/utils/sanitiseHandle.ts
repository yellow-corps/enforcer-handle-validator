/**
 * Sanitise for the purposes of comparisons.
 *
 * - turns strings lowercase
 * - replaces common number substitutions with letters
 */
export default function sanitiseHandle(handle: string) {
  return handle
    .toLowerCase()
    .replaceAll("0", "o")
    .replaceAll("1", "i")
    .replaceAll("3", "e")
    .replaceAll("5", "s")
    .replaceAll("7", "l");
}
