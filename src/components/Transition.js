import React, { Component } from "react";

export default class Transition extends Component {
  constructor(props) {
    //console.log(props.data.connectorGraphicsInfo);
    super();
  }

  componentDidMount() {}
  render() {
    let coo = this.props.data.connectorGraphicsInfo.coordinates;
    let lines = [];
    for (let i = 0; i < coo.length - 1; i++) {
      const e1 = coo[i];
      const e2 = coo[i + 1];
      lines.push({
        x1: e1.xCoordinate,
        y1: e1.yCoordinate,
        x2: e2.xCoordinate,
        y2: e2.yCoordinate
      });
    }
    return (
      <svg>
        {lines.map((e, i) => (
          <line
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            style={{ stroke: "black", strokewidth: 2 }}
            key={i}
          />
        ))}
      </svg>
    );
  }
}
