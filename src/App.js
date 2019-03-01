import React, { Component } from "react";
import image from "./download.jpeg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.scan = this.scan.bind(this);
  }

  async scan() {
    let Tesseract = window.Tesseract;
    const result = await Tesseract.recognize(image);
    console.log(result);
  }

  componentDidMount() {
    this.scan();
  }

  render() {
    return <div className="App">HI</div>;
  }
}

export default App;
