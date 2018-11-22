import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';
import Legend from './components/Legend';
import PieceResevoir from './containers/PieceResevoir';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';

class App extends Component {

  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

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
    const resevoir = this.state.spaces.resevoir;

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
    if (finish.id === 'resevoir' || finish.pieceIds.length === 0) {
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
      return;
    }

    // moving to a space with a piece already there (from the resevoir)
    if (start.id === 'resevoir') {
      const newResevoirPieceIds = Array.from(resevoir.pieceIds);
      const newFinishPieceIds = Array.from([draggableId]);

      const displacedId = this.state.spaces[destination.droppableId].pieceIds[0];
      newResevoirPieceIds.splice(source.index, 1, displacedId);

      const newResevoirSpace = {
        ...resevoir,
        pieceIds: newResevoirPieceIds
      }

      const newFinishSpace = {
        ...finish,
        pieceIds: newFinishPieceIds
      }

      const newState = {
        ...this.state,
        spaces: {
          ...this.state.spaces,
          [newResevoirSpace.id]: newResevoirSpace,
          [newFinishSpace.id]: newFinishSpace,
        }
      }

      this.setState(newState);


      return;
    }

    // moving to space with a piece already there (swap the pieces)
    const newStartPieceIds = Array.from(finish.pieceIds);
    const newFinishPieceIds = Array.from(start.pieceIds);

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
          <Board state={this.state} />
          <Legend />
          <PieceResevoir state={this.state} />
        </DragDropContext>
      </div>
    );
  }
}

export default App;
