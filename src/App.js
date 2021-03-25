import BoardSelection from 'components/BoardSelection';
import Header from 'components/Header'
import ListSelection from 'components/ListSelection';
import CardSelection from 'components/CardSelection';
import FormatSelection from 'components/FormatSelection'
import Login from 'components/Login';
import Selection from 'components/Selection'
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 5em;
  background-color: snow;
`;


function App() {
  return (
    <div>
      <Header />
      <Container>
        <FormatSelection />
      </Container>
    </div>
  );
}

export default App;
