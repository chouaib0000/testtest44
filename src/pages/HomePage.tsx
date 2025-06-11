import React from 'react';
import HeroSection from '../components/HeroSection';
import InsuranceOffers from '../components/InsuranceOffers';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import QuoteForm from '../components/QuoteForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <InsuranceOffers />
      <WhyChooseUs />
      <HowItWorks />
      <QuoteForm />
    </div>
  );
};

export default HomePage;