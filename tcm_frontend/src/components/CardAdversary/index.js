import React from 'react';
import { Card } from '@material-ui/core';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';

const CardAversary = () => {
  const classes = useStyles();
  const matchsdid = [
    '81e4de76-5116-4c8f-bea9-d9c6fef01475',
    '81e4de76-5116-4c8f-bea9-d9c6fef01475',
  ];

  return (
    <div>
      {matchsdid !== []
        ? matchsdid.map((matchid, id) => {
            return (
              <Card key={id} className={classes.card}>
                <Opponents matchid={matchid} />
              </Card>
            );
          })
        : null}
    </div>
  );
};
export default CardAversary;
