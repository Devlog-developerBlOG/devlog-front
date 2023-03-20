import axios from "axios";
import { BASEURL } from "./BaseUrl";
import { requestCheck } from "./requestCheck";

const CustomAxios = axios.create({
  baseURL: BASEURL,
  headers : {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Origin": "*",
    "withCredentials" : true,
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  }
});

export default CustomAxios

CustomAxios.interceptors.request.use(requestCheck);