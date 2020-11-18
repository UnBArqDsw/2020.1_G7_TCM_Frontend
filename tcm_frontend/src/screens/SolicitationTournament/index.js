/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Container, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AppBar from '../../components/Appbar';
import NavBar from '../../components/Navbar';
import { useStyles } from './style';
import tournament from '../../services/tournament';

const SolicitationTournament = (props) => {
  console.log(props.location.state);
  const classes = useStyles();
  const {
    name,
    start_date,
    end_date,
    estado,
    cidade,
    endereco,
    players_quantity,
    description,
    id,
  } = props.location.state.torneio;
  const history = useHistory();

  const solicitationLogic = async (tournamentId) => {
    await tournament.solicitationTournament(tournamentId);
    history.push('/feed');
  };
  return (
    <Container className={classes.container}>
      <AppBar />
      <Container className={classes.stylecontainer}>
        <Typography className={classes.stylefont}>{`Nome:${name}`}</Typography>
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
          {`Inicio:${start_date}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Termino:${end_date}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Numero de jogadores:${players_quantity}`}
        </Typography>
        <Typography className={classes.stylefont}>
          {`Descrição:${description}`}
        </Typography>
        <Button
          fullWidth
          className={classes.styleButton}
          onClick={() => solicitationLogic(id)}
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
