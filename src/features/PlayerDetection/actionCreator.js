export const SET_ACTOR_PREDICTION = "SET_ACTOR_PREDICTION";
export const setActorPrediction = (actorData) => ({
  type: SET_ACTOR_PREDICTION,
  playload: {...actorData},
});

export const SET_PREDICTION = "SET_PREDICTION";
export const setPrediction = (prediction) => ({
  type: SET_PREDICTION,
  playload: { ...prediction },
});

export const LOAD_PREDICTIONS = "LOAD_PREDICTIONS";
export const loadPredictions = () => ({
  type: LOAD_PREDICTIONS,
});

export const LOAD_DETECTOR_ASS = "LOAD_DETECTOR_ASS";
export const onLoadDetector = () => ({
  type: LOAD_DETECTOR_ASS,
});
