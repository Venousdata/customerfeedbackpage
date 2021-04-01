import axios from "axios";
import sinon from "sinon";
import { get, post } from "../api";
import { axiosConfigGet, axiosConfigPost } from "../config";
import {
  postBodyData,
  expectedGetParams,
  expectedPostParams,
} from "./data/api.test.data";

describe("api call tests", () => {
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

  it("Get request should work correctly (correct params)", async (done) => {
    const aGet = sandbox.stub(axios, "get").resolves({ status: 200, data: "" });
    const data = await get("/product/3", axiosConfigGet);
    expect(aGet.getCall(0).args).toEqual(expectedGetParams);
    expect(data).toEqual("");
    done();
  });

  it("Post request should work correctly (correct params)", async (done) => {
    const aPost = sandbox
      .stub(axios, "post")
      .resolves({ status: 200, data: "" });
    const data = await post("/products/all", postBodyData, axiosConfigPost);
    expect(aPost.getCall(0).args).toEqual(expectedPostParams);
    expect(data).toEqual("");
    done();
  });
});
