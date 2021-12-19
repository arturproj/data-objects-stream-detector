import * as helpers from "../helpers";

export class Prediction {
  id;
  actorId;
  size;
  position;
  time;

  #select_W = (detection) =>
    detection.box.bottomRight.x - detection.box.topLeft.x;

  #select_H = (detection) =>
    detection.box.bottomRight.y - detection.box.topLeft.y;

  #selectAxes = (detection) => ({
    _asseX: detection.box.topLeft.x,
    _asseY: detection.box.topLeft.y,
  });

  constructor(actorReffId, detection) {
    this.id = "";
    this.actorId = actorReffId;
    this.size = {
      _H: this.#select_H(detection),
      _W: this.#select_W(detection),
    };
    this.position = this.#selectAxes(detection);
    this.time = detection.time;
    // console.log(this);
  }
}

export default class Person {
  id;
  name;
  DATA = [];
  color;
  constructor({ id, appearances, objectClass }) {
    this.id = id;
    // this.appearances = appearances;
    this.name = objectClass;
    this.color = helpers.stringToColour(id);
    appearances.map((appearance) =>
      appearance.boxes.map((boxes) =>
        this.DATA.push(new Prediction(this.id, boxes))
      )
    );
    // console.log(this);
  }
}
