import React, { useState } from 'react';
import styled from 'styled-components';

import Layout from './components/Layout';
import CanvasForm from './components/CanvasForm';
import Artboard from './components/Artboard';
import useHistory from './useHistory';

const AppContainer = styled.div`
  font-family: 'VT323', monospace;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { state, set, ...historyFunctions } = useHistory({});
  return (
    <AppContainer>
      <Layout isSubmitted={isSubmitted} historyFunctions={historyFunctions}>
        {isSubmitted
          ? <Artboard state={state} setGridColor={set}/>
          : <CanvasForm setIsSubmitted={setIsSubmitted} />
        }
      </Layout>
    </AppContainer>
  )
}

export default App;
