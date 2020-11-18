/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './style';
import tournament from '../../services/tournament';

const SolicitationTournament = (props) => {
  console.log(props.location.torneio);
  const classes = useStyles();
  const {
    nome,
    inicio,
    termino,
    estado,
    cidade,
    endereco,
    numeroDeJogadores,
    descricao,
    tournamentId,
  } = props;
  return (
    <Container className={classes.container}>
      <AppBar />
      <Container className={classes.stylecontainer}>
        <Typography className={classes.stylefont}>{`Nome:${nome}`}</Typography>
        <Typography className={classes.stylefont}>
          {`Estado:${estado}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Cidade:${cidade}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Endereço:${endereco}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Inicio:${inicio}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Termino:${termino}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Numero de jogadores:${numeroDeJogadores}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Descrição:${descricao}`}
        </Typography>
        <Button
          fullWidth
          className={classes.styleButton}
          onClick={() => tournament.solicitationTournament(tournamentId)}
          variant="contained"
        >
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
