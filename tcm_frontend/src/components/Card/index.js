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
      <CardContent>
        <div className={classes.stylediv}>
          <Avatar className={classes.avatar}>LA</Avatar>
        </div>
        <Container className={classes.stylecontainer}>
          <div>
            <Typography>Nome: Torneio Brasilia</Typography>
            <Typography>Local: Brasilia/DF</Typography>
            <Typography>Data: 10/10/2020</Typography>
          </div>
        </Container>
      </CardContent>
    </Card>
  );
}
