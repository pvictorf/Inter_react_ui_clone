import { Header } from '../components/orgarnisms/Header'
import { TopSection } from '../components/orgarnisms/TopSection';
import { BenefitsSection } from '../components/orgarnisms/BenefitsSection';
import { BankSection } from '../components/orgarnisms/BankSection';

export const Home = () => {
  return (
    <div className="home-page">
        <Header />
        <TopSection />
        <BenefitsSection />
        <BankSection />
    </div>
  );
}