import {
  capitalizeFirstLetter,
  getColumns,
  getRows,
  validateProductReviewForm,
  getReviewChartConfig,
} from "../helpers";
import {
  reviewsArr,
  reviewsRows,
  columnsArr,
  columnsArrMinusExclusions,
  formObj,
  expectedFormErrorsObj,
  expectedChartConfig,
} from "./data/helpers.data";

describe("helpers tests", () => {
  it("capitalizeFirstLetter should capitalize first letter of string", async (done) => {
    expect(capitalizeFirstLetter("james")).toEqual("James");
    done();
  });

  it("getColumns should return columns in correct format", async (done) => {
    expect(getColumns(reviewsArr)).toEqual(columnsArr);
    done();
  });

  it("getColumns should return columns in correct format minus exclusions", async (done) => {
    expect(getColumns(reviewsArr, ["id", "productid"])).toEqual(
      columnsArrMinusExclusions
    );
    done();
  });

  it("getRows should return rows in correct format", async (done) => {
    expect(getRows(reviewsArr)).toEqual(reviewsRows);
    done();
  });

  it("validateProductReviewForm should return rows in correct format", async (done) => {
    expect(validateProductReviewForm(formObj)).toEqual(expectedFormErrorsObj);
    done();
  });

  it("getReviewChartConfig should return rows in correct format", async (done) => {
    expect(JSON.stringify(getReviewChartConfig(reviewsArr))).toEqual(
      expectedChartConfig
    );
    done();
  });
});
