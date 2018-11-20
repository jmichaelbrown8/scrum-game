import React, { Component } from 'react';
import Space from '../components/Space';
import Piece from '../components/Piece';

class Board extends Component {
  render() {
    var title = this.props.title;
    var state = this.props.state;
    var style = {
      "position": "absolute"
    }

    return (
      <div className="Board">
        <h1>{title}</h1>
        <img src={require("../arrow-90.jpg")}
          style={{
            "width": "150px",
            "position": "absolute",
            "left": "350px",
            "top": "125px"
          }}/>
        <img src={require("../arrow-90.jpg")}
          style={{
            "width": "150px",
            "position": "absolute",
            "left": "340px",
            "bottom": "90px",
            "transform": "rotate(90deg)"
          }}/>
        <img src={require("../arrow-90.jpg")}
          style={{
            "width": "150px",
            "position": "absolute",
            "left": "90px",
            "bottom": "100px",
            "transform": "rotate(180deg)"
          }}/>
        <img src={require("../arrow-90.jpg")}
          style={{
            "width": "150px",
            "position": "absolute",
            "left": "100px",
            "top": "115px",
            "transform": "rotate(-90deg)"
          }}/>

        <Space index={0}
          space={state.spaces['space-1']}
          style={{...style, "top": "90px", "left": "245px"}}
          state={state} />
        <Space index={1}
          space={state.spaces['space-2']}
          style={{...style, "top": "260px", "right": "75px"}}
          state={state} />
        <Space index={2}
          space={state.spaces['space-3']}
          style={{...style, "bottom": "60px", "left": "245px"}}
          state={state} />
        <Space index={3}
          space={state.spaces['space-4']}
          style={{...style, "top": "260px", "left": "75px"}}
          state={state} />
        <Space index={4}
          space={state.spaces['space-5']}
          style={{...style, "top": "260px", "left": "245px"}}
          state={state} />
        <Space index={5}
          space={state.spaces['space-6']}
          style={{...style, "top": "50px", "left": "40px", "border-radius": "100%"}}
          state={state} />
        <Space index={6}
          space={state.spaces['space-7']}
          style={{...style, "top": "50px", "right": "40px", "border-radius": "100%"}}
          state={state} />
        <Space index={7}
          space={state.spaces['space-8']}
          style={{...style, "bottom": "40px", "right": "40px", "border-radius": "100%"}}
          state={state} />
        <Space index={8}
          space={state.spaces['space-9']}
          style={{...style, "bottom": "40px", "left": "40px", "border-radius": "100%"}}
          state={state} />

      </div>
    );
  }
}

export default Board;
