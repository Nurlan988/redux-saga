import { takeEvery, put, call, all, fork } from 'redux-saga/effects';
import { setLatestNews, setPopularNews, setPopularNewsError, setLatestNewsError, getLatestNews, getPopularNews } from '../actions/actionCreator';
import { getLatestNewsApi, getPopularNewsApi } from '../../api/index';

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNewsApi, 'react');
    yield put(setLatestNews(hits));
  } catch {
    yield put(setLatestNewsError());
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNewsApi);
    yield put(setPopularNews(hits));
  } catch {
    yield put(setPopularNewsError());
  }
}

export function* watchPopularSaga() {
  yield takeEvery(getPopularNews, handlePopularNews);
}

export function* watchLatestSaga() {
  yield takeEvery(getLatestNews, handleLatestNews);
}

export default function* rootSaga() {
  yield all([
    fork(watchPopularSaga),
    fork(watchLatestSaga),
  ]);
}