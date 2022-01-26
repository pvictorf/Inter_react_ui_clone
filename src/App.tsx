import React from 'react';
import { GlobalStyle } from './components/bosons/GlobalStyle'
import { Header } from './components/orgarnisms/Header'
import { TopSection } from './components/orgarnisms/TopSection';
import { BenefitsSection } from './components/orgarnisms/BenefitsSection';
import { BankSection } from './components/orgarnisms/BankSection';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Header />
        <TopSection />
        <BenefitsSection />
        <BankSection />
    </div>
  );
}

export default App;
