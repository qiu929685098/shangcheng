import http from "./http";
//请求首页列表
export const getMainListApi = params => http.post("home/recommend", params);
//请求分类页列表
export const getClassifyListApi = params => http.post("classify", params);
//详情页数据
export const getDetailDataApi = params => http.post("detail", params);
