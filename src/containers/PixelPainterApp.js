import React from 'react';
import { Canvas, Palette } from '../components';


export default class PixelPainterApp extends React.Component {
  render () {
    return (
      <div id='PixelPainterApp'>
        <h1>Welcome to Pixel Painter Redux!</h1>
        <Canvas />
        <Palette
          width={5}
          height={10}
        />
      </div>
    );
  }
}