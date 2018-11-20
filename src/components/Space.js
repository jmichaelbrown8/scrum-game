import React, { Component } from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Piece from './Piece';

class Space extends Component {
  render() {
    var space = this.props.space;
    var state = this.props.state;
    var style = this.props.style;

    return (
      <Droppable droppableId={space.id}>
        {(provided) => (
          <div className="Space"
            style={style}
            ref={provided.innerRef}
            {...provided.droppabledProps}>
            {space.pieceIds.map((pieceId, index) => {
              return <Piece piece={state.pieces[pieceId]} key={pieceId} index={index} />
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default Space;
