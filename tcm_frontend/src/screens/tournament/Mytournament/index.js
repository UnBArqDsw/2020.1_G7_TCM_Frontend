import React from 'react';
import { Container } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';
import Card from '../../../components/Card';
import { useStyles } from './styles';

const MyTournament = () => {
  const [value, setValue] = React.useState(2);
  const styles = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // alert('teste');
  };

  return (
    <Container maxWidth="md" className={styles.styleDiv}>
      <AppBar />
      <Tabs
        indicatorColor="#00000"
        variant="scrollable"
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        className={styles.tabs}
      >
        <Tab label="Criados" />
        <Tab label="Inscritos" />
      </Tabs>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <NavBar />
      </div>
    </Container>
  );
};

export default MyTournament;
