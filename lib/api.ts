import axios from "axios";
const baseURL = "https://campers-api.goit.study";

export const api = axios.create({
  baseURL,
});
