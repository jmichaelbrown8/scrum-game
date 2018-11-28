import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Shape from './Shape';

class Piece extends Component {
  render() {
    var piece = this.props.piece;
    var index = this.props.index;

    return (
      <Draggable draggableId={piece.id} index={index} >
        {(provided, snapshot) => (
          <div className="Piece"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
          >
            <Shape id={piece.id}></Shape>
            <div id={piece.id + '-text'}>{piece.content}</div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Piece;
