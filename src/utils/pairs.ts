export function parsePairs(
  args: string[],
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const arg of args) {
    const parts = arg.split("=", 2);
    if (parts.length !== 2) {
      throw new Error(`${arg} must be in the format NAME=VALUE`);
    }
    out[parts[0]] = parts[1];
  }
  return out;
}
