/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './styles';
import Card from '../../components/Card';
import api from '../../services/api';

const Feed = () => {
  const classes = useStyles();
  const [torneios, setorneios] = useState([]);
  const history = useHistory();

  function gettournament() {
    api.get('tournament/feed').then((res) => {
      setorneios(res.data.tournament);
    });
  }

  function handleOnClick(torneio) {
    history.push({
      pathname: `/solicitation/${torneio.id}`,
      state: { torneio },
    });
  }

  useEffect(() => {
    gettournament();
  }, []);

  return (
    <>
      <AppBar />
      <div className={classes.stylesdiv}>
        {torneios !== []
          ? torneios.map((torneio, id) => {
              return (
                <div key={id} onClick={() => handleOnClick(torneio)}>
                  <Card
                    nome={torneio.name}
                    cidade={torneio.cidade}
                    endereco={torneio.endereco}
                    data={torneio.start_date}
                  />
                </div>
              );
            })
          : null}
        <div className={classes.footer} />
      </div>
      <NavBar />
    </>
  );
};

export default Feed;
