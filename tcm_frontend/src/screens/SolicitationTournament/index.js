import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './style';

const SolicitationTournament = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <AppBar />
      <Container className={classes.stylecontainer}>
        <Typography className={classes.stylefont}>
          Nome: Torneio Brasilia
        </Typography>
        <Typography className={classes.stylefont}>Estado: Brasilia</Typography>
        <Typography className={classes.stylefont}>Cidade: Ceilandia</Typography>
        <Typography className={classes.stylefont}>
          Inicio: 10/10/2020
        </Typography>
        <Typography className={classes.stylefont}>
          Termino: 20/10/2020
        </Typography>
        <Typography className={classes.stylefont}>
          Número de Jogadores: 8
        </Typography>
        <Typography className={classes.stylefont}>Descrição: </Typography>
        <Button fullWidth className={classes.styleButton} variant="contained">
          Solicitar inscrição
        </Button>
      </Container>
      <div className={classes.footer}>
        <NavBar />
      </div>
    </Container>
  );
};

export default SolicitationTournament;
