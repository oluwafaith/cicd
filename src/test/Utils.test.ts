import { toUpperCase, getStringInfo } from "../utils";

describe("describing uppercase", () => {
  test("check if its upper case", () => {
    const sut = toUpperCase;
    const expected = "ABC";

    const actual = sut("abrc");

    expect(expected).toBe(actual);
  });

  test.only("should return info for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9);

    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toContain<string>("M");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});

describe.only("test extrainfo", () => {
  test.each([
    { input: "abc", expected: "ABC" },

    { input: "hello", expected: "HELLO" },
    { input: "helloworld", expected: "HELLOWORLD" },
  ])("$input to uppercase $expected", ({ input, expected }) => {
    const actual = toUpperCase(input);
    expect(actual).toBe(expected);
  });
});
