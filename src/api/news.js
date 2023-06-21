import axios from "axios";


const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '8c35f6dbb4msh30ae6bb02c7a835p1f8ee2jsnaec07e69d330'
}
const API = axios.create({ baseURL: baseUrl });

export const getNewsInformation = ({ newsCategory, count }) => {
    return API.get(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`, {
      headers: newsApiHeaders,
    });
  };
  