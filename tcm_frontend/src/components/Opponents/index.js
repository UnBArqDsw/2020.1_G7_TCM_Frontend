import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import { useStyles } from './styles';

const Opponents = (props) => {
  const classes = useStyles();
  const { player1, player2 } = props.match;

  return (
    <Grid container className={classes.stylegrid} spacing={10}>
      <Grid item className={classes.gridstyle}>
        <Avatar className={classes.avatar}>{player1.name[0]}</Avatar>
        <Typography align="center" gutterBottom className={classes.stylefont}>
          {player1.name}
        </Typography>
      </Grid>
      <ClearIcon />
      <Grid item>
        <Avatar className={classes.avatar}>{player1.name[0]}</Avatar>
        <Typography align="center" className={classes.stylefont}>
          {player2.name}
        </Typography>
      </Grid>
      <Container className={classes.stylecontainer} />
    </Grid>
  );
};
export default Opponents;
