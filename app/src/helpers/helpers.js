import dayjs from "dayjs";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getColumns = (arrayOfObjects, exlusions) => {
  return Object.keys(arrayOfObjects[0])
    .map((key) => ({
      field: key,
      headerName: capitalizeFirstLetter(key),
      width: key === "comment" ? 500 : key === "date" ? 300 : 200,
    }))
    .filter((column) => !exlusions.includes(column.field));
};

export const getRows = (arrayOfObjects) => {
  return arrayOfObjects.map((obj) => ({
    id: obj.id,
    name: obj.name,
    email: obj.email,
    rating: obj.rating,
    comment: obj.comment,
    date: dayjs(obj.date).format("MMMM D, YYYY"),
  }));
};
