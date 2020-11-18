import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

const Feed = () => {
  const classes = useStyles();
  const [torneios, setorneios] = useState([]);

  function gettournament() {
    api.get('tournament/feed').then((res) => {
      setorneios(res.data.tournament);
    });
  }

  useEffect(() => {
    gettournament();
  }, []);

  // console.log(torneios);
  return (
    <Container className={classes.container}>
      <AppBar />
      <div className={classes.stylesdiv}>
        {torneios.map((torneio, id) => {
          return (
            <Card
              key={id}
              nome={torneio.name}
              cidade={torneio.cidade}
              endereco={torneio.endereco}
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
