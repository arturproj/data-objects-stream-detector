import React from "react";
import PlayerDetection from "./features/PlayerDetection";
import videoStream from "./assets/porshe.mp4";

console.log("Hello webpack!");

class App extends React.Component {
  componentDidMount() {
    // if (this.canvas) {
    //   console.log(this.canvas);
    // }
  }
  render() {
    return (
      <React.Fragment>
        <PlayerDetection videoSource={videoStream} />
      </React.Fragment>
    );
  }
}

export default App;
