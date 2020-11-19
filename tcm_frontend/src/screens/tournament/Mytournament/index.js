/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { Container, Link } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';
import Card from '../../../components/Card';
import { useStyles } from './styles';
import api from '../../../services/api';

const MyTournament = () => {
  const styles = useStyles();
  const [createdList, dsetCreatedList] = useState([]);
  const [participationList, setParticipationList] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function getTournamnets() {
      const response = await api.get('/tournament');
      if (response.status === 200) {
        dsetCreatedList(response.data.tournament);
      }

      const response2 = await api.get('/user/tournaments');
      if (response2.status === 200) {
        setParticipationList(response2.data.solicitation);
      }
    }
    getTournamnets();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {};

  return (
    <>
      <Container maxWidth="md" className={styles.styleDiv}>
        <AppBar />
        <Tabs
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          className={styles.tabs}
        >
          <Tab label="Criados" value={0} />
          <Tab label="Inscritos" value={1} />
        </Tabs>
        {value === 1
          ? participationList.map((tournament) => {
              const {
                id,
                name,
                endereco,
                start_date,
                cidade,
              } = tournament.tournaments;
              return (
                <Link key={id} onClick={() => handleClick()}>
                  <Card
                    nome={name}
                    cidade={cidade}
                    local={endereco}
                    data={start_date}
                  />
                </Link>
              );
            })
          : createdList.map((tournament) => {
              const { name, endereco, start_date, cidade, id } = tournament;
              return (
                <Link key={id} onClick={() => handleClick()}>
                  <Card
                    nome={name}
                    cidade={cidade}
                    local={endereco}
                    data={start_date}
                  />
                </Link>
              );
            })}
        <div className={styles.footer} />
      </Container>
      <NavBar />
    </>
  );
};

export default MyTournament;
