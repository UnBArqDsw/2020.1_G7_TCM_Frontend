/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import {
  Typography,
  Button,
  Box,
  MuiThemeProvider,
  Container,
} from '@material-ui/core';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';
import User from '../../../services/user';
import Tournament from '../../../services/tournament';
import { button, useStyles } from './style';

function ViewTournamentInfo({ location }) {
  const history = useHistory();
  const classes = useStyles();
  const [accepted, setAccepted] = useState(false);
  const [hideSolicitation, setHideSolicitation] = useState(true);
  const [hideParticipant, setHideParticipant] = useState(true);
  const [players, setPlayers] = useState([]);
  const { ismanager } = location.state;
  const {
    id,
    manager,
    solicitations,
    participants,
  } = location.state.tournament;

  const searchParticipantsName = async () => {
    const aux = [];
    if (participants !== undefined) {
      participants.map(async (participant) => {
        await User.findById(participant.players).then((response) =>
          aux.push(response.data),
        );
      });
      setPlayers(aux);
    }
  };

  useEffect(() => {
    searchParticipantsName();
  }, []);
  const showSolicitation = () => {
    setHideSolicitation(!hideSolicitation);
  };

  const showParticipant = () => {
    setHideParticipant(!hideParticipant);
  };

  const handleAccept = async (user) => {
    try {
      await Tournament.acceptSolicitation(id, user).then(setAccepted(true));
    } catch (err) {
      setAccepted(false);
    }
  };

  const showRounds = (tournament) => {
    history.push({ pathname: '/viewtournament', state: tournament });
  };

  return (
    <>
      <AppBar />
      <div className={classes.footer} />
      <Container maxWidth="md">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {ismanager === true ? (
            <>
              <Typography>Bem vindo ao seu Torneio,</Typography>
              <Typography>{manager.name}</Typography>
              <div className={classes.footer} />
              <MuiThemeProvider theme={button}>
                {hideSolicitation === true ? (
                  <Button
                    style={{ color: '#fff', marginBottom: '10px' }}
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => showSolicitation()}
                  >
                    Mostrar Solicitações
                  </Button>
                ) : (
                  <Button
                    style={{ marginBottom: '10px' }}
                    color="primary"
                    variant="outlined"
                    fullWidth
                    onClick={() => showSolicitation()}
                  >
                    Esconder Solicitações
                  </Button>
                )}
              </MuiThemeProvider>
              {hideSolicitation === false &&
              solicitations !== undefined &&
              solicitations.lenght !== 0
                ? solicitations.map((solicitation) => {
                    return solicitation.accepted === false ? (
                      <Box
                        key={solicitation.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: '10px',
                          width: '90%',
                          margin: '10px auto',
                        }}
                      >
                        <Typography>
                          {solicitation.requester.nickname}
                        </Typography>
                        <Button
                          style={{ color: '#fff' }}
                          color="primary"
                          variant="contained"
                          onClick={
                            () => handleAccept(solicitation.requester.id)
                            // eslint-disable-next-line react/jsx-curly-newline
                          }
                        >
                          Aceitar Solicitação
                        </Button>
                        <Typography>
                          {accepted ? 'Usuário inscrito com sucesso' : null}
                        </Typography>
                      </Box>
                    ) : null;
                  })
                : null}
            </>
          ) : (
            <Typography>{`Torneio de: ${manager.name}`}</Typography>
          )}
          {hideParticipant === true ? (
            <Button
              color="primary"
              style={{ color: '#fff', marginBottom: '10px' }}
              variant="contained"
              fullWidth
              onClick={() => showParticipant()}
            >
              Mostrar Participantes
            </Button>
          ) : (
            <Button
              style={{ marginBottom: '10px' }}
              color="primary"
              variant="outlined"
              fullWidth
              onClick={() => showParticipant()}
            >
              Esconder Participantes
            </Button>
          )}
          {hideParticipant === false &&
          participants !== undefined &&
          participants.lengh !== 0
            ? players.map((participant, index) => {
                return (
                  <Typography key={index}>{participant.user.name}</Typography>
                );
              })
            : null}
        </Box>
        <div className={classes.footer} />
        <MuiThemeProvider theme={button}>
          <Button
            color="primary"
            style={{ color: '#fff', margin: 'auto 0px' }}
            variant="contained"
            fullWidth
            onClick={() => showRounds(location.state.tournament)}
          >
            Ver Partidas
          </Button>
        </MuiThemeProvider>
        <div className={classes.footer} />
      </Container>
      <NavBar />
    </>
  );
}

export default ViewTournamentInfo;
