import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';

const CardAversary = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container className={classes.stylegrid} spacing={10}>
        <Grid item>
          <Avatar className={classes.avatar}>M</Avatar>
        </Grid>
        <Grid item>
          <Avatar className={classes.avatar}>L</Avatar>
        </Grid>
        <Container className={classes.stylecontainer}>
          <Typography className={classes.stylefont} />
        </Container>
      </Grid>
    </Card>
  );
};
export default CardAversary;
