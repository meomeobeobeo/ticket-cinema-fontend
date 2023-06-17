import axios from "axios";

const baseUrl = "http://localhost:1337";
const API = axios.create({ baseURL: baseUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getFilmInformation = () => {
  return API.get("/blue/films");
};
export const login = ({ formData }) => {
  return API.post("/auth/login", formData);
};
export const signUp = ({ formData }) => {
  return API.post("/auth/signUp", formData);
};
export const getDetailFilms = ({ id }) => {
  return API.get(`/blue/films/${id}`);
};

export const getDataBaseOnFilmId = ({ id }) => {
  return API.post(`/filmManager/getDataBaseOnFilmId`, { filmId: id });
};
