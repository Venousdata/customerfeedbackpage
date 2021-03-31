import supertest from "supertest";
import sinon from "sinon";
import {
  allProducts,
  allProductReviews,
  productReviews,
  singleProduct,
} from "./data/routes.data.js";
import { shutdown } from "../../db/index.js";
import app from "../../server.js";

const request = supertest(app);

describe("endpoint tests", () => {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
    sandbox.restore();
  });

  afterAll(() => {
    shutdown();
  });

  it("product endpoint should return individual product", async (done) => {
    sandbox.stub(request, "get").resolves({ status: 200, body: singleProduct });
    const { body, status } = await request.get("/product/3");
    expect(status).toBe(200);
    expect(body).toEqual(singleProduct);
    done();
  });

  it("products/all endpoint should return all products", async (done) => {
    sandbox.stub(request, "get").resolves({ status: 200, body: allProducts });
    const { body, status } = await request.get("/products/all");
    expect(status).toBe(200);
    expect(body).toEqual(allProducts);
    done();
  });

  it("productreviews/all endpoint should return all reviews", async (done) => {
    sandbox
      .stub(request, "get")
      .resolves({ status: 200, body: allProductReviews });
    const { body, status } = await request.get("/productreviews/all");
    expect(status).toBe(200);
    expect(body).toEqual(allProductReviews);
    done();
  });

  it("productreviews/:id endpoint should return all reviews where productid = id", async (done) => {
    sandbox
      .stub(request, "get")
      .resolves({ status: 200, body: productReviews });
    const { body, status } = await request.get("/productreviews/product/3");
    expect(status).toBe(200);
    expect(body).toEqual(productReviews);
    done();
  });
});
