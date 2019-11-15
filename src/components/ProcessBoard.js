import React, { Component } from "react";
import Pool from "./Pool";

export default class ProcessBoard extends Component {
  state = {
    process: []
  };

  constructor(props) {
    super();
  }

  componentDidMount() {
    fetch("http://localhost:8500/prueba").then(x => {
      x.json().then(y => {
        this.setState({
          process: y
        });
      });
    });
  }

  render() {
    let height = 0;
    let width = 0;
    if (this.state.process.length !== 0)
      for (let i = 0; i < this.state.process.pools.length; i++) {
        const element = this.state.process.pools[i].nodeGraphicsInfo;
        height = element.height;
        width = element.width;
      }

    return (
      <div>
        {this.state.process.length !== 0 ? (
          <div>
            <div>{this.state.process.name}</div>
            <div
              style={{
                overflow: "auto",
                overflowY: "scroll",
                width: "100%",
                height: "30%"
              }}
            >
              <svg width={width + 50} height={height + 50}>
                {this.state.process.pools.map((e, i) => (
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
