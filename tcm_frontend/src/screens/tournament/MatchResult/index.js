import React from 'react';
import { Box, Container } from '@material-ui/core';
import { useStyles } from './styles';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import ButtonBox from '../../../components/Buttonbox';

const MatchResult = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Appbar />
      <div className={classes.centerBox}>
        <p className={classes.title}>Insira o resultado da partida (sets)</p>
        <div className={classes.scoreBoard}>
          <div className={classes.playerScore}>
            <div className={classes.playerScoreBox}>
              <p className={classes.playerScoreBoxText}>0</p>
            </div>
            <p>Jogador 1</p>
          </div>
          <div className={classes.playerScore}>
            <div className={classes.playerScoreBox}>
              <p className={classes.playerScoreBoxText}>0</p>
            </div>
            <p>Jogador 1</p>
          </div>
        </div>
      </div>
      <ButtonBox className={classes.buttonBox} />
      <div className={classes.footer}>
        <Navbar />
      </div>
    </Container>
  );
};

export default MatchResult;
