/**
 * Function to replace all instances of a hyphen with a space
 * @param value string we want to remove hyphens from
 * @returns a string which has had its hyphens removed and replaced with spaces
 */
export function removeHyphens(value: string) {
  return value.replace(/-/g, " ");
}
