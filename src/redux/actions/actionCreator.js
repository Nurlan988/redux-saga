import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setLatestNewsError = () => ({
  type: SET_LATEST_NEWS_ERROR,
  payload: 'Error fatching latest news',
});

export const setPopularNewsError = () => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload: 'Error fatching popular news',
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});

export const getPopularNews = () => ({
  type: GET_POPULAR_NEWS,
});
