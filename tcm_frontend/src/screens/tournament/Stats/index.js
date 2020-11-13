import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './style';
import AppBar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

const Stats = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar />
      <div className={classes.centerBox}>
        <p className={classes.title}>Quartas de finais - BSB Open</p>
        <div className={classes.observationTable}>
          <p className={classes.observationTableTitle}>Observações</p>
          <div className={classes.observationBox}>
            <p className={classes.observationBoxText}>
              Moacir deu um show contra o Matheus Estanislau
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </Container>
  );
};

export default Stats;
