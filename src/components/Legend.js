import React, { Component } from 'react';

class Legend extends Component {
  render() {
    var name = this.props.name;

    return (
      <div className="Legend">
        <h2>Instructions</h2>
        <p>The scrum framework suggests only four ceremonies (represented by the spaces
          in the green arrows), though teams often include many other events related
          to the agile principles of inspecting and adapting.
        </p>
        <p>
        Drag the pieces to the places they belong in the scrum framework.
        </p>
      </div>
    );
  }
}

export default Legend;
