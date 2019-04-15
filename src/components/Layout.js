import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const MainContainer = styled.main`
  width: 100%;
  flex: 0 1 100%;
  margin-bottom: auto;
`;

export default function Layout({children, isSubmitted, historyFunctions}) {
  return (
    <>
      <Header isSubmitted={isSubmitted} {...historyFunctions}/>
      <MainContainer>{children}</MainContainer>
      <footer>Javen Nakamoto 2019 - Made with React Hooks 🎣</footer>
    </>
  )
}