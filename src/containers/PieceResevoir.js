import React, { Component } from 'react';
import Space from '../components/Space';
import Piece from '../components/Piece';
import {Droppable} from 'react-beautiful-dnd';

class PieceResevoir extends Component {
  render() {
    var title = this.props.title;
    var state = this.props.state;

    return (
      <div className="PieceResevoir">
        <h2>Extra Pieces</h2>
        <Droppable droppableId="resevoir" direction="horizontal">
          {provided => (
            <div
              id="resevoir"
              ref={provided.innerRef}
              {...provided.droppabledProps}
            >
              {state.spaces.resevoir.pieceIds.map((pieceId, index) => {
                var piece = state.pieces[pieceId];
                return <Piece piece={piece} index={index} key={pieceId} />
              })}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default PieceResevoir;
