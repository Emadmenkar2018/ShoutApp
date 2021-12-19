import axios from "axios"; 
import {rootURL} from '../config'
 

axios.interceptors.request.use(
  (config) => { 
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    let message = "";
    console.log("Network Error", err );
    if (err.response) {
      message = err.response;
    } 
    else {
      message = "Network Error";
    }
 
    return Promise.reject(err.response);
  }
);

/**
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data in JSON form for POST requests
 * @param {object} params (optional) data in the url for GET requests
 */
export const apiCall = async (method, path, data, params) => {

  const res = await axios({
    method,
    url: rootURL() + path,
    data,
    params,
  });

  return res;
};
export default apiCall;
