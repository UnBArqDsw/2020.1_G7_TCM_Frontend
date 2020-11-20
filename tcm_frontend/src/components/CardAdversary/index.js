import React from 'react';
import { Card } from '@material-ui/core';
import Opponents from '../Opponents/index';
import { useStyles } from './styles';

const CardAversary = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <Opponents />
      </Card>
      <Card className={classes.card}>
        <Opponents />
      </Card>
      <Card className={classes.card}>
        <Opponents />
      </Card>
      <Card className={classes.card}>
        <Opponents />
      </Card>
      <Card className={classes.card}>
        <Opponents />
      </Card>
      <Card className={classes.card}>
        <Opponents />
      </Card>
    </div>
  );
};
export default CardAversary;
