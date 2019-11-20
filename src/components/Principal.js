import React, { Component } from "react";
import ProcessBoard from "./ProcessBoard";
import Bpa from "./Bpa";

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
      return (
        <div className="container text-center">
          <p>Seleccione un diagrama</p>
        </div>
      );
    } else {
      return <ProcessBoard diagram={this.state.diagram} />;
    }
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <h1>🦄 Welcome to the BPA 🦄</h1>
        </div>
        <div className="container-fluid">
          <div>
            <Bpa SelectDiagram={this.SelectDiagram} />
          </div>
          <div>{this.diagramIsSelected()}</div>
        </div>
      </div>
    );
  }
}
