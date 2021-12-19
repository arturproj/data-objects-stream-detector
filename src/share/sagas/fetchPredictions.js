import { put, takeLatest, all, call } from "redux-saga/effects";
import * as actionsDetector from "../../features/PlayerDetection/actionCreator";
import Person from "./objectTypes/Person";

export const detectionCreator = (stage) => {
  switch (stage.objectClass) {
    case "OBJECT_CLASS_PERSON":
      stage.objectClass = "OBJECT_PERSON";
      return new Person(stage);

    default:
      return { type: "DATA_OBJECT_ERROR", stage };
  }
};
export function* fetchPredictions() {
  try {
    const json = yield fetch("http://localhost:3000/data").then((response) =>
      response.json()
    );

    yield all(
      json.analysis.objects.map((actor) =>
        put(actionsDetector.setActorPrediction(detectionCreator(actor)))
      )
    );

    yield put(actionsDetector.loadPredictions());
  } catch (error) {
    console.log(error);
    // yield put({ type: FETCH_POST_SUCCESS_FAILURE, error });
  }
}

export default fetchPredictions;
