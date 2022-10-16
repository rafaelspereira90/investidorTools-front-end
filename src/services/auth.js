import axios from "axios";
export const TOKEN_KEY = "authToken";

const API_URL = "https://facade-1665855219335.azurewebsites.net/v1/auth";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (username, password) => {
  return axios
    .post(API_URL + "/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const authService = {
  login,
  logout,
  isAuthenticated,
  getToken
};

export default authService;