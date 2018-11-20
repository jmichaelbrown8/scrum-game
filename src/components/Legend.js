import React, { Component } from 'react';

class Legend extends Component {
  render() {
    var name = this.props.name;

    return (
      <div className="Legend">
        {name}
      </div>
    );
  }
}

export default SpLegendace;
