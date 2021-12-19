import * as actions from "./actionCreator";

const initialState = {
  loading: null,
  allPredictions: [],
  actorsPredictions: [],
  actorsDetected: [],
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
    case actions.SET_ACTOR_PREDICTION:
      let { actorsPredictions } = state;

      if (
        actorsPredictions.filter(
          (itemInArray) => itemInArray.id === action.playload.id
        ).length === 0
      ) {
        actorsPredictions.push(action.playload);
      } else {
        console.log("ready exist");
      }
      return {
        ...state,
        loading: false,
        actorsPredictions,
      };
    /**
     *
     */
    case actions.LOAD_PREDICTIONS:
      const { allPredictions } = state;
      state.actorsPredictions.map((actor) =>
        actor.DATA.map((prediction) => allPredictions.push(prediction))
      );

      allPredictions.sort((a, b) => a.time < b.time);
      return { ...state, allPredictions, loading: false };
    /**
     *
     */
    default:
      return state;
  }
};
export default reducer;
