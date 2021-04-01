export const reviewsArr = [
  {
    id: 1,
    name: "James H",
    email: "jphowell@live.com",
    rating: 3,
    comment: "lol",
    date: "2021-03-28T00:00:00.000Z",
    productid: 1,
  },
];

export const reviewsRows = [
  {
    comment: "lol",
    date: "March 28, 2021",
    email: "jphowell@live.com",
    id: 1,
    name: "James H",
    rating: 3,
  },
];

export const columnsArr = [
  { field: "id", headerName: "Id", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "rating", headerName: "Rating", width: 200 },
  { field: "comment", headerName: "Comment", width: 500 },
  { field: "date", headerName: "Date", width: 300 },
  { field: "productid", headerName: "Productid", width: 200 },
];

export const columnsArrMinusExclusions = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "rating", headerName: "Rating", width: 200 },
  { field: "comment", headerName: "Comment", width: 500 },
  { field: "date", headerName: "Date", width: 300 },
];

export const formObj = {
  comment: "",
  email: "edm",
  name: "tester",
  rating: "0",
};

export const expectedFormErrorsObj = {
  comment: "Comment is empty, or longer than 400 characters",
  email: "Email is empty, invalid, or exceeded maximum length (100)",
  name: "",
  rating: "Rating is invalid. Pick a number (1-5)",
};

export const expectedChartConfig =
  '{"type":"bar","data":{"labels":["1/5","2/5","3/5","4/5","5/5"],"datasets":[{"label":"Quantity of ratings","data":[0,0,1,0,0],"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],"borderColor":["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],"borderWidth":1}]},"options":{"tooltips":{"enabled":false},"legend":{"labels":{"boxWidth":0}},"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}}';
