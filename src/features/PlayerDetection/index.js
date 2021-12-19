import React from "react";
import { connect } from "react-redux";
import * as actions from "./actionCreator";

import "../../assets/object_detetion.css";
import Component from "./component";

export const mapStateToProps = (state) => {
  return { ...state.detectorReducer };
};

export const mapDispatchToProps = (dispatch) => ({
  onLoadDetector: () => dispatch(actions.onLoadDetector())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
