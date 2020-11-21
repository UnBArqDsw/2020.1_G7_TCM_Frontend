/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';
import api from '../../services/api';

const CardAversary = ({ rounds }) => {
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
      console.log(res.data);
      setmatchs(res.data.matchs_list);
    });
  };

  useEffect(() => {
    getRounds();
  }, []);

  function handleOnClick(match) {
    history.push({
      pathname: '/match_result',
      state: { match },
    });
  }

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
    </div>
  );
};
export default CardAversary;
