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
      <div>
        {this.props.diagram.length !== 0 ? (
          <div>
            <div>{this.props.diagram.name}</div>
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
        <input type="file" name="client-file" id="get-files" />
      </div>
    );
  }
}
