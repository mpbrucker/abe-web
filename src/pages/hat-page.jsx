import * as React from "react";
import LabelPane from "../components/label-pane";

export default class HatPage extends React.Component {
  constructor(props) {
    super(props);
    let this.svg = d3.select("#abe")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    var t = textures.lines()
      .orientation("diagonal")
      .heavier(5)
      .thinner(1.5)
      .stroke("#009bdf")
      .background("#ffc20e");

    d3.xml("ABE.svg", "image/svg+xml", (xml) => {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("#abe")
        .each(function() {
          this.appendChild(importedNode);
        })
        // inside of our d3.xml callback, call another function
        // that styles individual paths inside of our imported svg
        this.renderHat(t)
    });
  }

  renderHat = () => {

  }

  render() {
    return (
      <div id="abe">
      </div>
    );
  }
}
