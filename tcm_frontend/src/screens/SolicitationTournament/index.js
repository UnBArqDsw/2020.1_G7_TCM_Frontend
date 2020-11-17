import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './style';

const SolicitationTournament = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar />

      <div className={classes.footer}>
        <NavBar />
      </div>
    </Container>
  );
};

export default SolicitationTournament;
