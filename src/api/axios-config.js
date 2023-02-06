import Axios from "axios";

export const urlApi = "https://apimadig.000webhostapp.com/";
export const apiClient = Axios.create({
  baseURL: `${urlApi}api`,
});
