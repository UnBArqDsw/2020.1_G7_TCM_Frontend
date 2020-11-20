import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';
import api from '../../services/api';

const CardAversary = () => {
  const classes = useStyles();
  const roundid = '11c44eda-60ff-49f5-bec6-e1f2725adcdd';
  const [matchs, setmatchs] = useState([]);
  function getround() {
    api.get(`round/${roundid}`).then((res) => {
      setmatchs(res.data.matchs_list);
    });
  }

  useEffect(() => {
    getround();
  }, []);
  console.log(matchs);
  return (
    <div>
      {matchs !== []
        ? matchs.map((match, id) => {
            return (
              <Card key={id} className={classes.card}>
                <Opponents match={match} />
              </Card>
            );
          })
        : null}
    </div>
  );
};
export default CardAversary;
