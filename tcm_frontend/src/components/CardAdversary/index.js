/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';
import api from '../../services/api';

const CardAversary = () => {
  const classes = useStyles();
  const roundid = '11c44eda-60ff-49f5-bec6-e1f2725adcdd';
  const [matchs, setmatchs] = useState([]);
  const history = useHistory();
  function getround() {
    api.get(`round/${roundid}`).then((res) => {
      setmatchs(res.data.matchs_list);
    });
  }

  useEffect(() => {
    getround();
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
