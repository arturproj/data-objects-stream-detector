import * as React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import videoStream from "../../assets/porshe.mp4";

class PlayerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadDetector();
  }
  render() {
    console.log(this.props);
    const { _H, _W, _asseX, _asseY, videoSource } = this.props;

    const showDetection = _H && _W && _asseX && _asseY;

    return (
      <React.Fragment>
        <ReactPlayer
          controls
          playing
          width="1280"
          height="720"
          url={videoSource}
          ref={(node) => (this.canvas = node)}
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            zIndex: 1,
          }}
        />
        <canvas
          style={{
            zIndex: 9999,
            position: "absolute",
            border: "solid",
            borderColor: "blue",
            borderRadius: 12,
            height: _H,
            width: _W,
            transform: `translate(${_asseX}px,${_asseY}px)`,
          }}
          hidden={!showDetection}
        ></canvas>
      </React.Fragment>
    );
  }
}

PlayerComponent.propTypes = {
  _H: PropTypes.number.isRequired,
  _W: PropTypes.number.isRequired,
  _asseX: PropTypes.number.isRequired,
  _asseY: PropTypes.number.isRequired,
  videoSource: PropTypes.string.isRequired,
};

PlayerComponent.defaultProps = {
  _H: 631 - 96,
  _W: 1194 - 646,
  _asseX: 646,
  _asseY: 96,
  videoSource: videoStream,
};

export default PlayerComponent;
