/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  MuiThemeProvider,
} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { useHistory } from 'react-router-dom';
import { useStyles, button } from './styles';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import api from '../../../services/api';

const MatchResult = ({ location }) => {
  const history = useHistory();
  const { player1, player2, match_id } = location.state.match;
  const classes = useStyles();

  const initialValues = {
    p1score: 0,
    p2score: 0,
  };

  const handleSubimit = async (data, id) => {
    let winner_id = '';
    if (data.p1score > data.p2score) {
      winner_id = player1.id;
    } else {
      winner_id = player2.id;
    }
    console.log(winner_id);
    const body = {
      winner_id,
      match_id: id,
      score: `${data.p1score} ${data.p2score}`,
    };
    await api.post('/playoff/add/match/result', body);
  };

  return (
    <>
      <Appbar />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubimit(values, match_id)}
      >
        {({ submitForm }) => (
          <Form>
            <Container
              maxWidth="md"
              style={{
                marginTop: '50%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Field
                    component={TextField}
                    className={classes.score1}
                    name="p1score"
                    type="number"
                    variant="outlined"
                  />
                  <Typography style={{ marginTop: '10px' }}>
                    {player1.name}
                  </Typography>
                </Box>
                <Typography variant="h4">X</Typography>
                <Box
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Field
                    component={TextField}
                    className={classes.score2}
                    name="p2score"
                    type="number"
                    variant="outlined"
                  />
                  <Typography style={{ marginTop: '10px' }}>
                    {player2.name}
                  </Typography>
                </Box>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '50%',
                }}
              >
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
                    onClick={() => history.goBack()}
                  >
                    Voltar
                  </Button>
                </MuiThemeProvider>
                <MuiThemeProvider theme={button}>
                  <Button
                    color="primary"
                    style={{
                      color: '#fff',
                      margin: '10px auto',
                      marginLeft: '10px',
                    }}
                    variant="contained"
                    fullWidth
                    onClick={submitForm}
                  >
                    Concluir
                  </Button>
                </MuiThemeProvider>
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
      <Navbar />
    </>
  );
};

export default MatchResult;
