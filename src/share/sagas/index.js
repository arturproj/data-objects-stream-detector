import { put, takeLatest, all, call } from "redux-saga/effects";
import * as actionsDetector from "../../features/PlayerDetection/actionCreator";
import fetchPredictions from "./fetchPredictions";

function* watcherRead() {
  yield takeLatest(actionsDetector.LOAD_DETECTOR_ASS, fetchPredictions);
}

export default function* rootSaga() {
  yield all([watcherRead()]);
}
