/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Card, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';
import api from '../../services/api';

const CardAversary = ({ rounds, idtournament }) => {
  const classes = useStyles();
  const [matchs, setmatchs] = useState([]);

  const history = useHistory();
  const aux = [];

  rounds.map((rounds) => {
    aux.push(rounds.id);
  });
  const [lastItem] = aux.slice(-1);

  const getRounds = async () => {
    await api.get(`round/${lastItem}`).then((res) => {
      setmatchs(res.data.matchs_list);
    });
  };

  useEffect(() => {
    getRounds();
  }, []);

  let aux1 = false;
  matchs.map((match) => {
    if (match.status === 'C') {
      aux1 = true;
    }
  });

  function handleOnClick(match) {
    history.push({
      pathname: '/match_result',
      state: { match },
    });
  }

  const generationNextRound = async (tournamentId) => {
    const name = 'teste';
    await api.post(`/generationnextround/${tournamentId}`, {
      name,
    });
  };

  return (
    <div>
      {matchs !== []
        ? matchs.map((match, id) => {
            return (
              <Card key={id} className={classes.card}>
                <div onClick={() => handleOnClick(match)}>
                  <Opponents match={match} />
                </div>
              </Card>
            );
          })
        : null}
      {aux1 === false ? (
        <Button
          style={{ marginBottom: '10px', marginTop: '20px' }}
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => generationNextRound(idtournament)}
        >
          Gerar proximo round
        </Button>
      ) : null}
    </div>
  );
};
export default CardAversary;
