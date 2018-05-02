import * as React from "react";
// import LabelPane from "../components/label-pane";
import d3 from 'd3';
import textures from 'textures';

export default class HatPage extends React.Component {
  constructor(props) {
    console.log("Loading")
    super(props);
    this.svg = d3.select("#abe")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);


    d3.xml("ABE.svg", "image/svg+xml", (xml) => {
      var importedNode = document.importNode(xml.documentElement, true);
      d3.select("#abe")
        .each(function() {
          this.appendChild(importedNode);
        })
        // inside of our d3.xml callback, call another function
        // that styles individual paths inside of our imported svg
        var t = textures.lines()
          .orientation("diagonal")
          .heavier(5)
          .thinner(1.5)
          .stroke("#009bdf")
          .background("#ffc20e");

        this.renderHat(t);
    });
  }

  renderHat = (texture) => {
    d3.selectAll('path')
      .style({
        "fill": texture.url(),
      });
  }

  render() {
    return (
      <div id="abe"></div>
    );
  }
}
