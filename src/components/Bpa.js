import React, { Component } from "react";
import Axios from "axios";
import Process from "./Process";
import Swal from "sweetalert2";

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

  createProcess = () => {
    Swal.fire({
      title: "Name of the process:",
      input: "text",
      confirmButtonText: "create",
      showCancelButton: true,
      preConfirm: name => {
        Axios.post("http://localhost:8001/createdir/" + name, []).then(resp => {
          if (resp.status === 200) {
            Swal.fire("Created!", "Your process has been created.", "success");
            this.refresh();
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!"
            });
          }
        });
      }
    });
  };

  refresh = () => {
    Axios.get("http://localhost:8001/getBpa").then(res => {
      console.log(res.data);
      this.setState({
        dir: res.data
      });
    });
  };

  display = () => {
    let x = this.state.dir.dirs;
    return (
      <div className="card shadow p-3">
        <div className="card-Body">
          <h5 className="card-title">BPA index</h5>
          <div className="accordion" id="accordion">
            {x.map((e, i) => (
              <Process
                data={e}
                index={i}
                SelectDiagram={this.props.SelectDiagram}
                refreshTree={this.refresh}
                acordionid="accordion"
                key={i}
              />
            ))}
          </div>
          <div className="p-2 text-right">
            <button
              type="button"
              onClick={this.createProcess}
              className="btn btn-outline-info"
            >
              create new
            </button>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.display()}</div>;
  }
}
