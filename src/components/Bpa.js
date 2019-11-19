import React, { Component } from "react";
import Axios from "axios";
import Process from "./Process";

export default class Bpa extends Component {
  state = {
    dir: {
      dir: "",
      data: [],
      dirs: []
    }
  };
  componentDidMount() {
    Axios.get("http://localhost:8001/getBpa").then(res => {
      console.log(res.data);
      this.setState({
        dir: res.data
      });
    });
  }
  display = () => {
    let x = this.state.dir.dirs;
    return (
      <div className="accordion" id="accordionExample">
        {x.map((e, i) => (
          <Process data={e} key={i} />
        ))}
      </div>
    );
  };
  render() {
    return <div>{this.display()}</div>;
  }
}
