import supertest from "supertest";
import { allProducts } from "./data/routes.data.js";
import { close } from "../../db/index.js";
import app from "../../server.js";

const request = supertest(app);

describe("endpoint tests", () => {
  afterAll(() => {
    return close();
  });

  it("products endpoint should return all products", async (done) => {
    const { body, status } = await request.get("/products");
    expect(status).toBe(200);
    expect(body).toEqual(allProducts);
    done();
  });
});
