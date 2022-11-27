import axios from "axios";
import { SnackMessage } from "../services/message";
import { errorHttp } from "./errorHttp";

const updateHeaders = (request) => {
  const token = "123123123";
  const newHeaders = {
    Authorization: token,
    "Content-Type": "application/json",
  };
  request.headers = newHeaders;
  return request;
};

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    const { url } = request;
    console.log(url);
    return url.includes("assets") ? request : updateHeaders(request);
  });

  axios.interceptors.response.use(
    (response) => {
        console.log('reponse',response)
        return response
    },
    (error) => {
        SnackMessage.error(errorHttp(error.code))
        console.log(errorHttp(error.code))
        return Promise.reject(error)
    }
  );
};
