import React, { Component } from "react";
import Pool from "./Pool";

export default class ProcessBoard extends Component {
  render() {
    let height = 0;
    let width = 0;
    if (this.props.diagram.length !== 0)
      for (let i = 0; i < this.props.diagram.pools.length; i++) {
        const element = this.props.diagram.pools[i].nodeGraphicsInfo;
        height = element.height;
        width = element.width;
      }

    return (
      <div className="card shadow p-2 mt-3">
        {this.props.diagram.length !== 0 ? (
          <div>
            <h3>{this.props.diagram.name}</h3>
            <div
              style={{
                overflow: "auto",
                overflowY: "scroll",
                width: "100%",
                height: "30%"
              }}
            >
              <svg width={width + 50} height={height + 50}>
                {this.props.diagram.pools.map((e, i) => (
                  <Pool data={e} key={i} />
                ))}
              </svg>
            </div>
            <div></div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
