import React from 'react';
import { GlobalStyle } from './components/bosons/GlobalStyle'
import { Header } from './components/orgarnisms/Header'
import { Container } from './components/bosons/Container'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
