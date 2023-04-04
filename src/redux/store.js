import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduser from "./reducers";
import rootSaga from './sagas';

const sagaMiddlewere = createSagaMiddleware();

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(sagaMiddlewere)));

//сall Saga after the store!!!
sagaMiddlewere.run(rootSaga)

export default store;