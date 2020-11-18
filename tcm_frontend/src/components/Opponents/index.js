import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import { useStyles } from './styles';

const Opponents = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.stylegrid} spacing={10}>
      <Grid item className={classes.gridstyle}>
        <Avatar className={classes.avatar}>M</Avatar>
        <Typography align="center" gutterBottom className={classes.stylefont}>
          Estanislau
        </Typography>
      </Grid>
      <ClearIcon />
      <Grid item>
        <Avatar className={classes.avatar}>L</Avatar>
        <Typography align="center" className={classes.stylefont}>
          joao
        </Typography>
      </Grid>
      <Container className={classes.stylecontainer} />
    </Grid>
  );
};
export default Opponents;
