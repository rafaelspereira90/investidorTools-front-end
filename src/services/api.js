import axios from "axios";
import { getToken } from "./auth";
export const TOKEN_KEY = "authToken";

const API_URL = "https://facade-1665855219335.azurewebsites.net/v1";

export const getReports = () => {
  return axios
    .get(API_URL + "/report")
    .then((response) => {
      return response.data;
    });
};

export const getReport = (id) => {
  return axios
    .get(API_URL + "/report/"+`${id}`)
    .then((response) => {
      return response.data;
    });
};
export const downloadReport = (id) => {
  return axios
    .get(API_URL + "/report/"+`${id}`+"/download")
    .then((response) => {
      return response.data;
  });
};

export const registerSale = () => null;

const apiService = {
  getReports,
  getReport,
  downloadReport,
  registerSale
};

axios.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = 'Bearer ' +token.replace(/["']/g, "");
  }
  return config;
});

export default apiService;