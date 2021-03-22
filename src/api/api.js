import axios from 'axios';

// User相關的 api
const request = axios.create({
  baseURL: '/api',
});
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: 'https://api/article/',
});
// 搜尋相關的 api
const searchRequest = axios.create({
  baseURL: 'https://api/search/',
});
//PlnVersion
export const plnVersionContorlApi = (data) => request.get('/PlnVersionControl');
export const testAPI = (data) =>
  request.get('/PlnProdStepDate/03910a76-2a93-4e80-91a6-13d3cdafdd75/1');
export const plnMGResultApi = (data) => {
  console.log(data)
  return request.get(`/PlnMGResult/${data}`);
};
