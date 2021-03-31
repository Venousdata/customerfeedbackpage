import { validateProductReviewForm } from "../helpers.js";
import { validForm, invalidForm } from "./data/helpers.data.js";

describe("helpers tests", () => {
  it("validateProductReviewForm should return true if valid, false if not", async (done) => {
    let isValid = validateProductReviewForm(validForm);
    expect(isValid).toBe(true);

    isValid = validateProductReviewForm(invalidForm);
    expect(isValid).toEqual(false);
    done();
  });
});
