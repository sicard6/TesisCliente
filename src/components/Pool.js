import React, { Component } from "react";
import Activity from "./Activity";
import Transition from "./Transition";

export default class Pool extends Component {
  state = {};

  constructor(props) {
    super();
  }
  componentDidMount() {
    //console.log(this.props.data);
  }
  render() {
    return (
      <svg>
        <rect
          x={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate}
          y={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate}
          width={this.props.data.nodeGraphicsInfo.width}
          height={this.props.data.nodeGraphicsInfo.height}
          style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
          rx="10"
          ry="10"
        />
        {this.props.data.workflowProcess.transitions.map((e, i) => (
          <Transition data={e} key={i} />
        ))}
        {this.props.data.workflowProcess.activities.map((e, i) => (
          <Activity data={e} key={i} />
        ))}
      </svg>
    );
  }
}
