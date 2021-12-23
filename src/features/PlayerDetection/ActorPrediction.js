import * as React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { createSelector } from "reselect";
import videoStream from "../../assets/porshe.mp4";

// {
//   "box": {
//     "bottomRight": {
//       "x": 1194,
//       "y": 631
//     },
//     "topLeft": {
//       "x": 646,
//       "y": 96
//     }
//   },
//   "time": 2002
// },

const demoPred = {
  actorId:
    "/organizations/01F4Y8EY8QQ5BN3Y3H2V5P5JAF/projects/01F7BH51HM9HF0JBFTSHZR3YAW/videos/01F7BH7QTTWPW8KNPS00NQPS8E/analyses/01FG4B1FW5RJP7WFK26A0BQRKW/objects/01FG4AZTT36DGC5W1E7CMP34FC",
  id: "",
  position: { _asseX: 646, _asseY: 96 },
  size: { _H: 535, _W: 548 },
  time: 2002,
};
const getPrediction = (state) => state.predictions;
function ActorPrediction(props) {
  const { actor, played, playedSeconds, loaded, loadedSeconds } = props;

  const [actorName, setActorName] = React.useState(null);
  const [actorId, setActorId] = React.useState(null);
  const [actorColor, setActorColor] = React.useState("#fff");
  const [predictions, setActorPredictions] = React.useState([]);
  const [currentPrediction, handleCurrentPrediction] = React.useState({
    position: { _asseX: 0, _asseY: 0 },
    size: { _H: 0, _W: 0 },
  });
  const [showBox, handleBoxPrediction] = React.useState(false);

  // onMount
  React.useEffect(() => {
    console.log("I Only run once (When the component gets mounted)", props);
    setActorName(props.actor.name);
    setActorId(props.actor.id);
    setActorPredictions(props.actor.DATA.sort((a, b) => a.time > b.time));
    setActorColor(props.actor.color);
    console.log("onMounted", {
      actorName,
      actorId,
      actorColor,
      predictions,
      currentPrediction,
      showBox,
    });
  }, []);

  // evry event
  React.useEffect(() => {
    if (predictions.length) {
      let current_preficitons = predictions.sort(
        (a, b) =>
          Math.abs(a.time - playedSeconds) + Math.abs(b.time - playedSeconds)
      );
      console.log(current_preficitons);
      let current_preficiton = current_preficitons[0];
      if (playedSeconds > 0) {
        handleCurrentPrediction(current_preficiton);

        handleBoxPrediction(
          currentPrediction &&
            parseInt(playedSeconds) ===
              parseInt((currentPrediction.time % 60000) / 1000)
            ? true
            : false
        );
      }
    }
    console.log(
      "%c %s played %s",

      `background: ${actorColor}; color: #fff`,
      actorName,
      playedSeconds,
      { currentPrediction }
    );
  });

  return (
    <React.Fragment>
      <canvas
        style={{
          zIndex: 9999,
          position: "absolute",
          border: " 6px solid",
          borderColor: actorColor,
          borderRadius: 12,
          height: currentPrediction.size._H,
          width: currentPrediction.size._W,
          transform: `translate(${currentPrediction.position._asseX}px,${currentPrediction.position._asseY}px)`,
        }}
        hidden={!showBox}
      />
    </React.Fragment>
  );
}

export default ActorPrediction;
