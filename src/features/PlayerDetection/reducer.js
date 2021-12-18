import * as actions from "./actionCreator";

const initialState = {
  loading: null,
  recDetections: [],
  allDetections: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /**
     *
     */
    case actions.LOAD_DETECTOR_ASS:
      return { ...state, loading: true };
    /**
     *
     */
    case actions.LOAD_DETECTION:
      let recDetections = state.recDetections.push(playload);

      return {
        ...state,
        loading: false,
        recDetections,
      };
    /**
     *
     */
    case actions.SET_DETECTIONS:
      return {
        ...state,
        loading: false,
        allDetections: action.playload,
      };
    /**
     *
     */
    default:
      return state;
  }
};
export default reducer;
