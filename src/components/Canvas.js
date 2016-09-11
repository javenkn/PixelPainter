import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';
import {
  changeColor,
  clearCanvas
} from '../actions/canvas';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class Canvas extends React.Component{
  render() {
    const height = this.props.canvas.length;
    const width = this.props.canvas[0].length;
    const rowArr = [];
    const canvasGrid = [];
    for(var i = 0; i < height; i++) {
      rowArr[i] = [];
      for(var j = 0; j < width; j++) {
        rowArr[i].push(
          <Pixel
            key={ j }
            x={ j }
            y={ i }
            handleClick={ this.props.changeColor.bind(this, i, j, this.props.palette.selectedColor) }
            color={ this.props.canvas[i][j] }
          />
        );
      }
      canvasGrid.push(
        <div
          key={ i }
          className='row'
        >
          { rowArr[i] }
        </div>
      );
    }
    return (
      <div
        id='canvas'
      >
        { canvasGrid }
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  changeColor,
  clearCanvas
})(Canvas);