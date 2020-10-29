import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';

const MyTournament = () => {
  return (
    <Container>
      <AppBar />
      <div>
        <NavBar />
      </div>
    </Container>
  );
};

export default MyTournament;
