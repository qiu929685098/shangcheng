import http from "./http";

export const getMainListApi = params => http.post("home/recommend", params);
