import React, {useState} from 'react';
import styled from 'styled-components';

import Palette from './Palette';

const ArtboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 7px solid black;
`;

const ArtboardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  align-self: baseline;
`;

const StyledSquare = styled.div`
  flex: 0 1 1.5vw;
  height: 1.5vw;
  border: 1px solid black;
  background: ${props => props.color ? props.color : 'none'};
  cursor: pointer;
`;

export default function Artboard({state, setGridColor}) {
  const COLORS = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];
  const [selectedColor, setSelectedColor] = useState('black');

  function renderSquare(index) {
    return (
      <StyledSquare
        key={index}
        color={state[index]}
        onClick={() => setGridColor({ ...state, [index]: selectedColor })}
      />
    )
  }

  return (
    <ArtboardContainer>
      <Palette colors={COLORS} setColor={setSelectedColor} selectedColor={selectedColor} />
      <ArtboardGrid>
        {Array(1120).fill(null).map((square, i) => renderSquare(i) )}
      </ArtboardGrid>
    </ArtboardContainer>
  );
}