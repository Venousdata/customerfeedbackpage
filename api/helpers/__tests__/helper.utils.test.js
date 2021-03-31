import { emailRegex } from "../helper.utils.js";
import { validEmail, invalidEmail } from "./data/helper.utils.data.js";

describe("helpers tests", () => {
  it("validateProductReviewForm should return true if valid, false if not", async (done) => {
    let isValid = emailRegex.test(validEmail);
    expect(isValid).toBe(true);

    isValid = emailRegex.test(invalidEmail);
    expect(isValid).toEqual(false);
    done();
  });
});
