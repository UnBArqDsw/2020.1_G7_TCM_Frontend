import React from 'react';
import { Container } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';

const MyTournament = () => {
  const handleChange = (event, newValue) => {
    alert('teste');
  };

  return (
    <Container>
      <AppBar />
      <Paper>
        <Tabs
          indicatorColor="#000000"
          textColor="#000000"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Criados" />
          <Tab label="Inscritos" />
        </Tabs>
      </Paper>
      <div>
        <NavBar />
      </div>
    </Container>
  );
};

export default MyTournament;
