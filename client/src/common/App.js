import React, { useState } from 'react';
import HeroSection from './component/hero';
import NavBar from './component/navbar';

const App = () => {
  const [walletInfo, setWalletInfo] = useState('');

  return (
    <div>
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
