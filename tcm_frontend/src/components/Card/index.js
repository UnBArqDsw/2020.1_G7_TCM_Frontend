import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './styles';

export default function Feed() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent style={{ display: 'flex' }}>
        <Avatar className={classes.avatar}>LA</Avatar>
        <Container className={classes.stylecontainer}>
          <Typography className={classes.stylefont}>
            Nome: Torneio Brasilia
          </Typography>
          <Typography className={classes.stylefont}>
            Local: Brasilia/DF
          </Typography>
          <Typography className={classes.stylefont}>
            Data: 10/10/2020
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
}
