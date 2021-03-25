import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes'

import Header from 'components/Header'

const Container = styled.div`
  padding-top: 5em;
  background-color: snow;
`;


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
  );
}

export default App;
