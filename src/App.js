import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';
import PieceResevoir from './containers/PieceResevoir';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';

class App extends Component {

  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
        return;
      }

    const start = this.state.spaces[source.droppableId];
    const finish = this.state.spaces[destination.droppableId];

    // moving in same space
    if (start === finish) {
      const newPieceIds = Array.from(start.pieceIds);
      newPieceIds.splice(source.index, 1);
      newPieceIds.splice(destination.index, 0, draggableId);

      const newSpace = {
        ...start,
        pieceIds: newPieceIds
      }

      const newState = {
        ...this.state,
        spaces: {
          ...this.state.spaces,
          [newSpace.id]: newSpace
        }
      }

      this.setState(newState);
      return;
    }

    // moving between spaces
    const newStartPieceIds = Array.from(start.pieceIds);
    const newFinishPieceIds = Array.from(finish.pieceIds);

    newStartPieceIds.splice(source.index, 1);
    newFinishPieceIds.splice(destination.index, 0, draggableId);

    const newStartSpace = {
      ...start,
      pieceIds: newStartPieceIds
    }

    const newFinishSpace = {
      ...finish,
      pieceIds: newFinishPieceIds
    }

    const newState = {
      ...this.state,
      spaces: {
        ...this.state.spaces,
        [newStartSpace.id]: newStartSpace,
        [newFinishSpace.id]: newFinishSpace,
      }
    }

    this.setState(newState);


  }

  render() {
    return (
      <div className="App">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Board title="Scrum Game" state={this.state} />
          <PieceResevoir state={this.state} />
        </DragDropContext>
      </div>
    );
  }
}

export default App;
