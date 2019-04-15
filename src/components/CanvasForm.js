import React from 'react';
import styled from 'styled-components';

import media from '../media-query';

const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 5vw;
  ${media.tablet`font-size: 7vw;`}
  
  > h3 {
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  width: 40vw;
  margin: 5% auto;
  font-size: 3vw;
  border: 0;
  color: white;
  background: ${props => props.hasError || props.disabled ? '#80808030' : 'red'};
  padding: 10px;
  border-radius: 8px;
  cursor: ${props => props.hasError || props.disabled ? 'default' : 'pointer'};
  outline: none;
`;

export default function CanvasForm({ setIsSubmitted }) {
  return (
    <AlertBox>
      <StyledButton onClick={() => setIsSubmitted(true)}>Let's Paint!</StyledButton>
    </AlertBox>
  );
}
