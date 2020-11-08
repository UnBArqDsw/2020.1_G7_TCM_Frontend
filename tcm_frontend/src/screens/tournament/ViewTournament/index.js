import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

const ViewTournament = () => {
  return (
    <Container>
      <div>
        <Appbar />
      </div>
      <div>
        <Navbar />
      </div>
    </Container>
  );
};

export default ViewTournament;
