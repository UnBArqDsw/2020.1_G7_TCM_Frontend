<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
/* eslint-disable react/no-array-index-key */
import React from 'react';
>>>>>>> 2641f71ef2f955a9eb26c8c91cb6e5c57f6baafb
import { Container } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

const Feed = () => {
  const classes = useStyles();
  const [torneiosapi, setorneiosapi] = useState([]);

  function gettournament() {
    api.get('tournament/feed').then((res) => {
      setorneiosapi(res.tournament);
    });
  }

  useEffect(() => {
    gettournament();
  }, []);

  console.log(torneiosapi);
  const torneios = [
    {
      nome: 'torneio do cristo',
      local: 'BSB',
      data: '10/10/20',
    },
    {
      nome: 'torneio do moacir',
      local: 'BSB',
      data: '10/10/20',
    },
  ];
  return (
    <Container className={classes.container}>
      <AppBar />
      <div className={classes.stylesdiv}>
        {torneios.map((torneio, id) => {
          return (
            <Card
              key={id}
              nome={torneio.nome}
              local={torneio.local}
              data={torneio.data}
            />
          );
        })}
      </div>
      <div className={classes.footer}>
        <NavBar />
      </div>
    </Container>
  );
};

export default Feed;
