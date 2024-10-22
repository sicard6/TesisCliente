import React, { Component } from "react";
import axios from "axios";

export default class FileSelector extends Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      path: props.path
    };
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    let splitted = this.props.path.split("\\");
    let pasted = splitted[1];
    for (let i = 2; i < splitted.length; i++) {
      pasted += "-" + splitted[i];
    }
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8001/uploadXml/" + pasted, data, {})
      .then(resp => {
        //? en caso de que sea necesario
      });

    axios.post("http://localhost:8500/MakeDiagram", data, {}).then(resp => {
      axios
        .post("http://localhost:8001/uploadJson/" + pasted, resp.data)
        .then(resp => {
          //console.log("json", resp);
          this.props.refreshTree();
        });
      this.props.SelectDiagram(resp.data);
    });
  };

  render() {
    return (
      <div>
        <div className="container text-center">
          <button
            data-toggle="collapse"
            data-target="#chooser"
            className="btn btn-info"
          >
            Upload Diagram
          </button>
        </div>
        <div id="chooser" className="collapse">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <div className="form-group files">
                <label>Upload your .xml diagram</label>
                <input
                  type="file"
                  name="file"
                  onChange={this.onChangeHandler}
                  accept=".xml"
                />
              </div>
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={this.onClickHandler}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
