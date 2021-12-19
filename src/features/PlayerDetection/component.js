import * as React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";

import videoStream from "../../assets/porshe.mp4";

class PlayerComponent extends React.Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    width: 0,
    height: 0,
  };

  canvas = React.createRef();

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  updateDimensions = () => {
    this.setState({
      width: document.querySelector("#player-box").clientWidth,
      height: document.querySelector("#player-box").clientHeight,
    });
  };
  componentDidMount() {
    this.props.onLoadDetector();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    console.log(this.props, this.state);
    const { _H, _W, _asseX, _asseY, videoSource } = this.props;

    const showDetection = _H && _W && _asseX && _asseY;

    return (
      <React.Fragment>
        <ReactPlayer
          id="player-box"
          controls
          playing
          width="100%"
          height="auto"
          url={videoSource}
          ref={this.canvas}
          style={{
            width: "1280",
            height: "720",
            position: "absolute",
            zIndex: 1,
          }}
          progressInterval={0.0001}
          onReady={() => console.log("onReady")}
          onStart={() => console.log("onStart")}
          onPlay={this.handlePlay}
          onEnablePIP={this.handleEnablePIP}
          onDisablePIP={this.handleDisablePIP}
          onPause={this.handlePause}
          onBuffer={() => console.log("onBuffer")}
          onPlaybackRateChange={this.handleOnPlaybackRateChange}
          onSeek={(e) => console.log("onSeek", e)}
          onEnded={this.handleEnded}
          onError={(e) => console.log("onError", e)}
          onProgress={this.handleProgress}
          onDuration={this.handleDuration}
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
