import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

// Configure default headers.
const headers = {
  Accept: "application/json",
  Authorization: token
};

// Apply headers.
api.defaults.headers.common = headers;

export default api;
