import React from 'react';
import Pixel from './Pixel';
import { connect } from 'react-redux';
import {
  selectAColor
} from '../actions/palette';

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

class Palette extends React.Component {
  render () {
    const width = this.props.palette.colors[0].length;
    const height = this.props.palette.colors.length;
    const rowArr = [];
    const paletteGrid = [];
    for(var i = 0; i < height; i++) {
      rowArr[i] = [];
      for(var j = 0; j < width; j++) {
        rowArr[i].push(
          <Pixel
            key={ j }
            color={ this.props.palette.colors[i][j] }
            handleClick={ this.props.selectAColor.bind(this, this.props.palette.colors[i][j])}
          />
        );
      }
      paletteGrid.push(
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
        id='palette'
        style={
          {
            display: 'inline-block'
          }
        }
      >
        { paletteGrid }
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  selectAColor
})(Palette);