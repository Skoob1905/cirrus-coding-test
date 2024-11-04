import { describe, test, expect } from "vitest";
import { removeHyphens } from "./formatString";

describe("FormatString", () => {
  // should remove hyphens from a string
  test("should remove hyphens from a string", () => {
    expect(removeHyphens("235fd-26cdf-1lf8")).toBe("235fd 26cdf 1lf8");
  });
});
