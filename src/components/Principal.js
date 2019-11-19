import React, { Component } from "react";
import FileSelector from "./FileSelector";
import ProcessBoard from "./ProcessBoard";

export default class Principal extends Component {
  state = {
    diagram: []
  };

  SelectDiagram = diagram => {
    this.setState({
      diagram: diagram
    });
  };

  diagramIsSelected = () => {
    if (this.state.diagram.length === 0) {
      return <p>suba un diagrama</p>;
    } else {
      return <ProcessBoard diagram={this.state.diagram} />;
    }
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <h1>Welcome to the BPA</h1>
        </div>
        <div>
          <FileSelector SelectDiagram={this.SelectDiagram} />
        </div>
        {this.diagramIsSelected()}
      </div>
    );
  }
}
