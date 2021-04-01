export const postBodyData = {
  name: "bad",
  email: "bad@test.com",
  rating: "1",
  comment: "bad",
};

export const expectedGetParams = [
  "/product/3",
  {
    baseURL: "http://localhost:8080/",
    headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
  },
];

export const expectedPostParams = [
  "/products/all",
  { name: "bad", email: "bad@test.com", rating: "1", comment: "bad" },
  {
    baseURL: "http://localhost:8080/",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
    },
  },
];
