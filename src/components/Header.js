import React from 'react';
import styled from 'styled-components';

import media from '../media-query';
import { StyledButton } from './CanvasForm';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.isSubmitted ? '2vw' : '5vw'};
  justify-content: ${props => props.isSubmitted ? 'flex-start' : 'center'};

  button {
    display: ${props => props.isSubmitted ? 'block' : 'none'};
  }
`;

const HeaderButton = styled(StyledButton)`
  width: 7vw;
  margin: 0 10px;
  font-size: 1vw;
  ${media.desktop`width: 10vw; font-size: 2vw;`}
  ${media.tablet`width: 10vw; font-size: 2vw;`}
  ${media.mobile`width: 10vw; font-size: 2vw;`}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: ${props => props.isSubmitted ? '5vw' : '7vw'};
  margin-right: ${props => props.isSubmitted ? 'auto' : '0'};;
`;

export default function Header({undo, redo, clear, canUndo, canRedo, ...styleProps}) {
  return (
    <HeaderContainer {...styleProps}>
      <Title {...styleProps}>👩‍🎨 PIXL PAINTR 👨‍🎨</Title>
      <HeaderButton onClick={undo} disabled={!canUndo}>Undo</HeaderButton>
      <HeaderButton onClick={redo} disabled={!canRedo}>Redo</HeaderButton>
      <HeaderButton onClick={clear}>Clear</HeaderButton>
    </HeaderContainer>
  );
}