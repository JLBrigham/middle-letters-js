// describe("leapYear", function () {
//     it("returns true if given year 400", function () {
//       expect(leapYear(400)).toBe(true);
//     });

describe("middleLetter", function () {
  it("returns the whole word if word is only 1 letter long", function () {
    expect(middleLetter("A")).toEqual("A");
  });

  it("returns thw whole word if word is 2 letters long", function () {
    expect(middleLetter("of")).toEqual("of");
  });
});
