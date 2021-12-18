import { connect } from "react-redux";
import { setDetections, onLoadDetector } from "./actionCreator";

import Component from "./component";

export const mapStateToProps = (state) => {
  return { ...state.detectorReducer };
};

export const mapDispatchToProps = (dispatch) => ({
  setDetections: (list) => dispatch(setDetections(list)),
  onLoadDetector: () => dispatch(onLoadDetector()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
