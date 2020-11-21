import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import ButtonBox from '../../../components/Buttonbox';
import api from '../../../services/api';

const MatchResult = (props) => {
  const classes = useStyles();
  const [winner, setWinner] = useState('none');
  const [error, setError] = useState('');

  const { player1, player2 } = props.match;
  const matchId = props.match.id;

  async function send(data) {
    await api.post('/friendly/add/match/result', data);
  }

  const submitMatchResult = () => {
    let player1Value = document.querySelector('input[name=p1value]').value;
    let player2Value = document.querySelector('input[name=p2value]').value;

    if (!player1Value) {
      player1Value = 0;
    }
    if (!player2Value) {
      player2Value = 0;
    }

    if (player1Value > player2Value) {
      setWinner(player1.id);
    } else if (player2Value < player1Value) {
      setWinner(player2.id);
    } else {
      setError('Não existem empates em tenis');
    }

    console.log(`player 1 digitou = ${player1Value}`);
    console.log(`player 2 digitou = ${player2Value}`);

    const score = `${player1Value} x ${player2Value}`;

    const data = { matchId, score, winner };

    send(data);
  };

  return (
    <Container className={classes.container}>
      <Appbar />
      <div className={classes.centerBox}>
        <p className={classes.title}>Insira o resultado da partida (sets)</p>
        <div className={classes.scoreBoard}>
          <div className={classes.playerScore}>
            <input
              type="text"
              name="p1value"
              placeholder="0"
              className={classes.playerScoreBox}
            />
            <p className={classes.playerScoreText}>Jogador 1</p>
          </div>

          <p className={classes.playerScoreSeparator}>X</p>

          <div className={classes.playerScore}>
            <input
              type="text"
              name="p2value"
              placeholder="0"
              className={classes.playerScoreBox}
            />
            <p className={classes.playerScoreText}>Jogador 2</p>
          </div>
        </div>

        {error ? <Typography>{error}</Typography> : null}
      </div>
      <ButtonBox
        className={classes.buttonBox}
        route="/feed"
        click={submitMatchResult}
      />
      <div className={classes.footer}>
        <Navbar />
      </div>
    </Container>
  );
};

export default MatchResult;
