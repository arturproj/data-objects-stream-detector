import React from "react";
import { connect } from "react-redux";
import * as actions from "./features/PlayerDetection/actionCreator";
import PlayerDetection from "./features/PlayerDetection";
import videoStream from "./assets/porshe.mp4";

console.log("Hello webpack!");

class App extends React.Component {
  componentDidMount() {
    // if (this.canvas) {
    //   console.log(this.canvas);
    // }
    console.log(this.props.predictionsStore.actorsPredictions);
  }
  render() {
    return (
      <React.Fragment>
        <PlayerDetection url={videoStream} dataDraw={this.props.predictionsStore.actorsPredictions} />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  return { predictionsStore: { ...state.detectorReducer } };
};

export const mapDispatchToProps = (dispatch) => ({
  onLoadDetector: () => dispatch(actions.onLoadDetector()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
