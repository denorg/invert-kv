/** Invert key-value pair of an object */
export function invert<T extends any>(obj: T): T {
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }
  for (const symbol of Object.getOwnPropertySymbols(obj)) {
    const value = obj[symbol];
    result[value] = symbol;
  }
  return result as T;
}
