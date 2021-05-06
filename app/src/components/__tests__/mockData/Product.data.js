export const mockProduct = {
  status: 200,
  data: {
    id: 1,
    name: "fake name",
    description: "fake description",
    image_src: "fake src",
  },
};

export const mockReviews = {
  status: 200,
  data: [
    {
      id: 1,
      name: "James H",
      email: "jphowell@live.com",
      rating: 3,
      comment:
        "I thought the back scratcher did not hit the spot, but it was nice!",
      date: "2021-03-28T00:00:00.000Z",
      productid: 1,
    },
    {
      id: 1,
      name: "test H",
      email: "test@live.com",
      rating: 5,
      comment: "testing!",
      date: "2021-02-28T00:00:00.000Z",
      productid: 1,
    },
  ],
};
