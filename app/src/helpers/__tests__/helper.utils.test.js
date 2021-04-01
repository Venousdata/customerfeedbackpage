import { emailRegex, countNumOccurrences } from "../helper.utils";

describe("helper utils tests", () => {
  it("emailRegex should validate correctly", async (done) => {
    expect(emailRegex.test("james")).toEqual(false);
    expect(emailRegex.test("james@outlook.com")).toEqual(true);
    done();
  });

  it("countNumOccurrences should return correct occurrences in array", async (done) => {
    expect(countNumOccurrences([1, 2, 3, 4, 4, 5, 6, 6], 4)).toEqual(2);
    expect(countNumOccurrences([1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 6], 5)).toEqual(
      4
    );
    done();
  });
});
