import React, { Component } from "react";
import FileSelector from "./FileSelector";
import Axios from "axios";
import Swal from "sweetalert2";

export default class Process extends Component {
  deleteProcess = () => {
    Swal.fire({
      title: "Are you sure?",
      text:
        "This will delete the process including all the subprocess. You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        let splitted = this.props.data.dir.split("\\");
        let pasted = splitted[1];
        for (let i = 2; i < splitted.length; i++) {
          pasted += "-" + splitted[i];
        }
        Axios.delete("http://localhost:8001/deleteProcess/" + pasted).then(
          resp => {
            if (resp.status === 200) {
              Swal.fire("Deleted!", "The process has been deleted.", "success");
              this.props.refreshTree();
            }
          }
        );
      }
    });
  };

  createProcess = () => {
    Swal.fire({
      title: "Name of the process:",
      input: "text",
      confirmButtonText: "create",
      showCancelButton: true,
      preConfirm: name => {
        let splitted = this.props.data.dir.split("\\");
        let pasted = splitted[1];
        for (let i = 2; i < splitted.length; i++) {
          pasted += "-" + splitted[i];
        }
        Axios.post(
          "http://localhost:8001/createdir/" + pasted + "-" + name,
          []
        ).then(resp => {
          if (resp.status === 200) {
            Swal.fire("Created!", "Your process has been created.", "success");
            this.props.refreshTree();
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

  showProcess = () => {
    let splitted = this.props.data.dir.split("\\");
    let pasted = splitted[1];
    for (let i = 2; i < splitted.length; i++) {
      pasted += "-" + splitted[i];
    }
    Axios.get("http://localhost:8001/getDiagram/" + pasted).then(resp => {
      this.props.SelectDiagram(resp.data);
    });
  };

  hasSubProcess = () => {
    if (this.props.data.dirs.length === 0) {
      return;
    } else {
      let splitted = this.props.data.dir.split("\\");
      let pasted = splitted[splitted.length - 1];
      return (
        <div>
          <h4 className="pl-3">Subprocess</h4>
          <div className="accordion p-2" id={"accordion" + pasted}>
            {this.props.data.dirs.map((e, i) => (
              <Process
                data={e}
                index={i}
                SelectDiagram={this.props.SelectDiagram}
                refreshTree={this.props.refreshTree}
                acordionid={"accordion" + pasted}
                key={i}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  hasData = nombre => {
    if (
      this.props.data.data.includes("Diagram.json") &&
      this.props.data.data.includes("Diagram.xml")
    ) {
      return (
        <div>
          <button
            type="button"
            onClick={this.showProcess}
            className="btn btn-outline-primary mb-2 ml-3"
          >
            Show Process
          </button>
          <div>{this.hasSubProcess()}</div>
          <div className="container text-right p-2">
            <button
              type="button"
              onClick={this.createProcess}
              className="btn btn-outline-warning"
            >
              new subprocess
            </button>
            <button
              type="button"
              onClick={this.deleteProcess}
              className="btn btn-outline-danger ml-3"
            >
              Delete {nombre}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <FileSelector
          SelectDiagram={this.props.SelectDiagram}
          path={this.props.data.dir}
          refreshTree={this.props.refreshTree}
        />
      );
    }
  };

  render() {
    let directorio = this.props.data.dir.split("\\");
    let nombre = directorio[directorio.length - 1];
    return (
      <div className="card shadow">
        <div className="card-header bg-light p-0" id={nombre + "b"}>
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target={"#" + nombre + "a"}
            aria-expanded={this.props.index === 0 ? "true" : "false"}
            aria-controls={nombre + "a"}
          >
            <b>{this.props.index + 1 + ". "}</b>
            {nombre}
          </button>
        </div>
        <div
          id={nombre + "a"}
          className="collapse show"
          aria-labelledby={nombre + "b"}
          data-parent={`#${this.props.acordionid}`}
        >
          <div className="card-body pl-0">{this.hasData(nombre)}</div>
        </div>
      </div>
    );
  }
}
