import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './styles';
import Card from '../../components/Card';

export default function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar />
      <div
        style={{
          backgroundColor: '#ffffff',
          height: '100vh',
        }}
      >
        <Card />
      </div>
      <div className={classes.footer}>
        <NavBar />
      </div>
    </Container>
  );
}
