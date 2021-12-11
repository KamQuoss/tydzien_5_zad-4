export const getData = () => {
  return fetch("users.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
};
