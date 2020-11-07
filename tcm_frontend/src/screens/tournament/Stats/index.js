import React from 'react';
import AppBar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

const Stats = () => {
  return (
    <div className="app">
      <AppBar />
      <div className="stat_page_title">
        <p>Quartas de finais - BSB Open</p>
      </div>
      <Navbar />
    </div>
  );
};

export default Stats;
