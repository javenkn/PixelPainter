import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  flex: 0 1 10%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3vw;
    grid-column: 1/end;
  }
`;

const Color = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin-top: 10px;
  background: ${props => props.color};
  cursor: pointer;
  border: ${props => props.selected ? '2px solid gray' : 'none'};

  :hover {
    border: 2px solid gray
  }
`;

export default function Palette({colors, setColor, selectedColor}) {
  return (
    <Container>
      <h1>🎨</h1>
      {colors.map((color, i) => (
        <Color
          key={i}
          color={color}
          onClick={() => setColor(color)}
          selected={color === selectedColor}
        />
      ))}
    </Container>
  );
}
  