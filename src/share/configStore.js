import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./sagas";

import detectorReducer from "../features/PlayerDetection/reducer";

const rootReducer = combineReducers({
  detectorReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
