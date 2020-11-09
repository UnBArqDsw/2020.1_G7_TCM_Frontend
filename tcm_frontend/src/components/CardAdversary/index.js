import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './styles';

const CardAversary = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.stylecardcontent}>
        <Container className={classes.stylecontainer}>
          <Typography className={classes.stylefont} />
        </Container>
      </CardContent>
    </Card>
  );
};
export default CardAversary;
