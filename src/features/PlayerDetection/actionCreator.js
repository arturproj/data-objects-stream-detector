export const SET_DETECTIONS = "SET_DETECTIONS";
export const setDetections = (detections) => ({
  type: SET_DETECTIONS,
  playload: [...detections],
});

export const LOAD_DETECTION = "LOAD_DETECTION";
export const loadDetection = (detection) => ({
  type: LOAD_DETECTION,
  playload: { ...detection },
});

export const LOAD_DETECTOR_ASS = "LOAD_DETECTOR_ASS";
export const onLoadDetector = () => ({
  type: LOAD_DETECTOR_ASS,
});

