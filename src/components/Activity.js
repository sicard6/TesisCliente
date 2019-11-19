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
          <svg>
            <circle
              cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
              cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
              r="14"
              stroke="goldenrod"
              strokeWidth="3"
              fill="gold"
            />
            <text
              x={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate - 5}
              y={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 45}
              style={{ font: "bold 10px sans-serif" }}
            >
              {this.props.data.name}
            </text>
          </svg>
        );
      } else if (this.props.data.event.result !== undefined) {
        //caso que es final
        return (
          <svg>
            <circle
              cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
              cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
              r="14"
              stroke="crimson"
              strokeWidth="3"
              fill="indianred"
            />
            <text
              x={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate - 5}
              y={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 45}
              style={{ font: "bold 10px sans-serif" }}
            >
              {this.props.data.name}
            </text>
          </svg>
        );
      } else if (this.props.data.event.trigger !== undefined) {
        //caso que es inicial
        return (
          <svg>
            <circle
              cx={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate + 14}
              cy={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 14}
              r="14"
              stroke="green"
              strokeWidth="3"
              fill="greenyellow"
            />
            <text
              x={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate - 5}
              y={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 45}
              style={{ font: "bold 10px sans-serif" }}
            >
              {this.props.data.name}
            </text>
          </svg>
        );
      }
    } else if (
      this.props.data.event === null &&
      this.props.data.gateway === null
    ) {
      // caso de que sea sub Proceso
      //console.log(this.props.data);
      return (
        <svg>
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
            style={{ fill: "lightcyan", stroke: "navy", strokeWidth: 3 }}
            rx="10"
            ry="10"
          />
        </svg>
      );
    } else if (this.props.data.gateway !== null) {
      // caso de que sea getway
      return (
        <svg>
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
          <text
            x={this.props.data.nodeGraphicsInfo.coordinate.xCoordinate - 5}
            y={this.props.data.nodeGraphicsInfo.coordinate.yCoordinate + 50}
            style={{ font: "bold 10px sans-serif" }}
          >
            {this.props.data.name}
          </text>
        </svg>
      );
    }
  }

  render() {
    return <svg>{this.activityType()}</svg>;
  }
}
