const API_URL = process.env.REACT_APP_API_URL;

const Api = {
  login: function (username, password) {
    return fetch(API_URL + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  register: function (username, password) {
    return fetch(API_URL + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  getCountries: function (size, limit, page, sort) {
    let params = "";
    if (size) params += `&size=${size}`;
    if (limit) params += `&limit=${limit}`;
    if (page) params += `&page=${page}`;
    if (sort) params += `&sort=${sort}`;

    return fetch(`${API_URL}countries/?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res) => res.json())
      .then((data) => {
        return data;
      })
  },
  getCountryByCode: function (code) {
    return fetch(`${API_URL}countries/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    }).then((res) => res.json())
      .then((data) => {
        return data;
      })
  },
  createCountry: function (code, name) {
    return fetch(API_URL + "countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        code: code,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  updateCountry: function (country) {
    return fetch(`${API_URL}countries/${country.code}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        ...country
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  },
  deleteCountry: function (code) {
    return fetch(API_URL + "countries/" + code, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }
};

export default Api;