import React from 'react';
import { GlobalStyle } from './components/bosons/GlobalStyle'
import { Header } from './components/orgarnisms/Header'
import { TopContent } from './components/orgarnisms/TopContent';
import { BenefitsContent } from './components/orgarnisms/BenefitsContent';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Header />
        <TopContent />
      <BenefitsContent />
    </div>
  );
}

export default App;
