import { put, takeLatest, all, call } from "redux-saga/effects";
import * as actionsDetector from "./../features/PlayerDetection/actionCreator";

const stringToColour = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

const Person = (person) => ({
  id: person.id,
  appearances: person.appearances,
  color: stringToColour(person.id),
});

const detectionCreator = (stage) => {
  switch (stage.objectClass) {
    case "OBJECT_CLASS_PERSON":
      return Person(stage);

    default:
      return { type: "DATA_OBJECT_ERROR", stage };
  }
};

function* fetchPredictions() {
  const json = yield fetch("http://localhost:3000/data").then((response) =>
    response.json()
  );

  console.log(json);

  let result = json.analysis.objects;

  result = result.map((ele) => detectionCreator(ele));

  yield put(actionsDetector.setDetections(result));
}
function* actionWatcher() {
  yield takeLatest(actionsDetector.LOAD_DETECTOR_ASS, fetchPredictions);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
