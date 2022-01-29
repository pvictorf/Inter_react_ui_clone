import React from 'react';

import { Header } from './components/orgarnisms/Header'
import { TopSection } from './components/orgarnisms/TopSection';
import { BenefitsSection } from './components/orgarnisms/BenefitsSection';
import { BankSection } from './components/orgarnisms/BankSection';

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <BenefitsSection />
      <BankSection />
    </div>
  );
}

export default App;
