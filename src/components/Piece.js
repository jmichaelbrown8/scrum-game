import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class Piece extends Component {
  render() {
    var piece = this.props.piece;
    var index = this.props.index;

    return (
      <Draggable draggableId={piece.id} index={index}>
        {(provided) => (
          <div className="Piece"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
          >
            {piece.content}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Piece;
