import React from 'react';
import { Typography, Container, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { borders } from '@material-ui/system';
import { useStyles } from './styles';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};

const CardAversary = () => {
  const classes = useStyles();

  return (
    <Card borderColor="primary.main" {...defaultProps} className={classes.card}>
      <Typography className={classes.stylefont} />
    </Card>
  );
};
export default CardAversary;
