import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './styles';
import Card from '../../components/Card';

const Feed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar />
      <div className={classes.stylesdiv}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={classes.footer}>
        <NavBar />
      </div>
    </Container>
  );
};

export default Feed;
