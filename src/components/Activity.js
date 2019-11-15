import React, { Component } from "react";

export default class Activity extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    //console.log(this.props.data);
  }

  activityType() {
    if (this.props.data.event !== null && this.props.data.gateway === null) {
      // caso que sea bolita
      if (this.props.data.event.trigger === "Timer") {
        // caso que es timer
        return (
          <circle
            cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
            cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
            r="14"
            stroke="yellow"
            strokeWidth="3"
            fill="yellow"
          />
        );
      } else if (this.props.data.event.result !== undefined) {
        //caso que es final
        return (
          <circle
            cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
            cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
            r="14"
            stroke="red"
            strokeWidth="3"
            fill="red"
          />
        );
      } else if (this.props.data.event.trigger !== undefined) {
        //caso que es inicial
        console.log(this.props.data);
        return (
          <circle
            cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
            cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
            r="14"
            stroke="green"
            strokeWidth="3"
            fill="green"
          />
        );
      }
    } else if (
      this.props.data.event === null &&
      this.props.data.gateway === null
    ) {
      // caso de que sea sub Proceso
      return (
        <rect
          x={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.xCoordinate
              : null
          }
          y={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.yCoordinate
              : null
          }
          width={this.props.data.nodeGraphicsInfo.width}
          height={this.props.data.nodeGraphicsInfo.height}
          style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
        />
      );
    } else if (this.props.data.gateway !== null) {
      // caso de que sea getway
      return (
        <rect
          x={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.xCoordinate
              : null
          }
          y={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.yCoordinate
              : null
          }
          width={this.props.data.nodeGraphicsInfo.width}
          height={this.props.data.nodeGraphicsInfo.height}
          style={{ fill: "yellow", stroke: "black", strokeWidth: 2 }}
        />
      );
    }
  }

  render() {
    return (
      <svg>
        {this.activityType()}
        {/* <rect
          x={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.xCoordinate
              : null
          }
          y={
            this.props.data.nodeGraphicsInfo.coordinate !== null
              ? this.props.data.nodeGraphicsInfo.coordinate.yCoordinate
              : null
          }
          width={this.props.data.nodeGraphicsInfo.width}
          height={this.props.data.nodeGraphicsInfo.height}
          style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
        /> */}
      </svg>
    );
  }
}
