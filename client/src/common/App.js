import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';
import HeroSection from './component/hero';
import NavBar from './component/navbar';
import Blockchain from './component/blockchain';
import ConductTransaction from './component/conductTransaction';
import TransactionPool from './component/transactionPool';
import Footer from './component/footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Blockchain />
      <TransactionPool />
      <ConductTransaction />
      <Footer />
    </div>
  );
};

export default App;
