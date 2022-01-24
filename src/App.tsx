import React from 'react';
import { GlobalStyle } from './components/bosons/GlobalStyle'
import { Header } from './components/orgarnisms/Header'
import { Container } from './components/bosons/Container'
import { TopContent } from './components/orgarnisms/TopContent';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <TopContent />
      </Container>
    </div>
  );
}

export default App;
