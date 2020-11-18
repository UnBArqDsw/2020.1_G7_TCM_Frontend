import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import CardAdversary from '../../../components/CardAdversary';

const ViewTournament = () => {
  return (
    <Container>
      <div>
        <Appbar />
      </div>
      <CardAdversary />
      <div>
        <Navbar />
      </div>
    </Container>
  );
};

export default ViewTournament;
