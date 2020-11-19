/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './styles';

const Feed = (props) => {
  const classes = useStyles();
  const { nome, cidade, local, data } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.stylecardcontent}>
        <Avatar className={classes.avatar}>LA</Avatar>
        <Container className={classes.stylecontainer}>
          <Typography className={classes.stylefont}>
            Nome:
            {nome}
          </Typography>
          <Typography className={classes.stylefont}>
            Local:
            {`${cidade}-${local}`}
          </Typography>
          <Typography className={classes.stylefont}>
            Data:
            {data}
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
};
export default Feed;
