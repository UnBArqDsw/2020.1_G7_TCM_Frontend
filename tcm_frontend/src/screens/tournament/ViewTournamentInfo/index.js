/* eslint-disable react/jsx-curly-newline */
/* eslint-disable array-callback-return */
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { button, useStyles } from './style';
import AppBar from '../../../components/Appbar';
import NavBar from '../../../components/Navbar';
import User from '../../../services/user';
import Tournament from '../../../services/tournament';
import api from '../../../services/api';

function ViewTournamentInfo({ location }) {
  const history = useHistory();
  const { ismanager } = location.state;
  const classes = useStyles();
  const [tournament, setTournament] = useState({});
  const [busy, setBusy] = useState(true);
  const [open, setOpen] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);
  const [requesters, setRequesters] = useState([]);
  const [names, setNames] = useState([]);

  const { participants } = location.state.tournament;

  const aux2 = [];
  const rounds = [];

  const getTournament = async () => {
    const { data } = await api.get(
      `tournaments/${location.state.tournament.id}`,
    );
    setTournament(data.tournament);
    setRequesters(data.tournament.solicitations);
    if (participants !== undefined) {
      participants.map(async (participant) => {
        const response = await User.findById(participant.players);
        aux2.push(response.data.user.name);
      });
      setNames(aux2);
    }
    setBusy(false);
  };

  useEffect(() => {
    getTournament();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenParticipants = () => {
    setOpenParticipants(true);
  };

  const handleCloseParticipants = () => {
    setOpenParticipants(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const acceptSolicitation = async (id, requesterID) => {
    await Tournament.acceptSolicitation(id, requesterID);
    setRequesters(
      requesters.filter((item) => item.requester.id !== requesterID),
    );
  };

  const initTournament = async (tournamentId) => {
    await api.post(`/generationround/${tournamentId}`);
  };

  const showRounds = (tournamentData) => {
    history.push({ pathname: '/viewtournament', state: tournamentData });
  };

  if (busy === true) {
    return (
      <>
        <Typography>Aguarde estamos carregando os dados</Typography>
      </>
    );
  }
  return (
    <>
      <AppBar />
      <div className={classes.footer} />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80%',
        }}
      >
        <Container
          maxWidth="md"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Typography variant="h6" align="center">
            {ismanager
              ? `Bem vindo ao seu torneio, ${tournament.manager.name}`
              : `Torneio de: ${tournament.manager.name}`}
          </Typography>
          {ismanager === true ? (
            <>
              <Button
                variant="contained"
                style={{ color: '#fff', margin: '10px 0' }}
                color="primary"
                fullWidth
                onClick={handleClickOpen}
              >
                Mostrar Solicitações
              </Button>
              <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogTitle style={{ alignSelf: 'center' }}>
                  Solicitações
                </DialogTitle>
                <DialogContent>
                  {requesters.map((req, index) => {
                    if (req.accepted === false) {
                      return (
                        <Accordion key={index}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{req.requester.nickname}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                              }}
                            >
                              <Box>
                                <Typography>{`Nome: ${req.requester.name}`}</Typography>
                                <Typography>{`Nível: ${req.requester.level}`}</Typography>
                              </Box>
                              <MuiThemeProvider theme={button}>
                                <Button
                                  color="primary"
                                  style={{
                                    color: '#fff',
                                    margin: '10px auto',
                                    marginRight: '10px',
                                  }}
                                  variant="contained"
                                  fullWidth
                                  onClick={() =>
                                    acceptSolicitation(
                                      tournament.id,
                                      req.requester.id,
                                    )
                                  }
                                >
                                  Aceitar Solicitação
                                </Button>
                              </MuiThemeProvider>
                            </Box>
                          </AccordionDetails>
                        </Accordion>
                      );
                    }
                    return null;
                  })}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Fechar
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          ) : null}
          <Button
            variant="contained"
            style={{ color: '#fff', margin: '10px auto' }}
            color="primary"
            fullWidth
            onClick={handleClickOpenParticipants}
          >
            Mostrar Participantes
          </Button>
          <Dialog open={openParticipants} onClose={handleClose} maxWidth="md">
            <DialogTitle style={{ alignSelf: 'center' }}>
              Participantes
            </DialogTitle>
            <DialogContent>
              {names.map((participant, index) => {
                return (
                  <Typography key={index}>{`Nome: ${participant}`}</Typography>
                );
              })}
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseParticipants}
                color="primary"
                autoFocus
              >
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
          {tournament.rounds.length !== 0 ? (
            <Button
              variant="contained"
              style={{ color: '#fff', margin: '10px auto' }}
              color="primary"
              fullWidth
              onClick={() => showRounds(location.state.tournament)}
            >
              Ver partidas
            </Button>
          ) : null}
          <Button
            variant="contained"
            style={{ color: '#fff', margin: '10px auto' }}
            color="primary"
            fullWidth
            disabled={
              rounds.length !== 0 || names.length < tournament.players_quantity
            }
            onClick={() => initTournament(tournament.id)}
          >
            Iniciar Torneio
          </Button>
          <Button
            variant="contained"
            style={{ color: '#fff', marginTop: 'auto' }}
            color="primary"
            fullWidth
            onClick={() => history.goBack()}
          >
            Voltar
          </Button>
        </Container>
        <div className={classes.footer} />
      </Box>
      <NavBar />
    </>
  );
}

export default ViewTournamentInfo;
