/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {
  Box,
  Container,
  FormControl,
  Button,
  Typography,
  MuiThemeProvider,
} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { theme, button, useStyles } from './style';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import Tournament from '../../../services/tournament';

const contactSchema = Yup.object().shape({
  name: Yup.string('Nome Torneio Inválido')
    .required('Nome é obrigatório')
    .min(3, 'Deve conter pelo menos 3 caracteres'),
  type: Yup.string('Tipo Inválido').required('Tipo é obrigatório'),
  estado: Yup.string('Estado Inválido').required('Estado é obrigatório'),
  cidade: Yup.string('Cidade Inválida').required('Cidade é obrigatória'),
  endereco: Yup.string('Endereço Inválido').required('Endereço é obrigatório'),
  players_quantity: Yup.number('Quantidade Inválida').required(
    'Qauntidade de jogadores é obrigatório',
  ),
  start_date: Yup.date('Data inválida').required(
    'Data de início é obrigatória',
  ),
  end_date: Yup.date('Data inválida').required('Data de término é obrigatória'),
  description: Yup.string('Endereço Inválido').required(
    'Descrição é obrigatória',
  ),
});

const CreateTournament1 = () => {
  const [error, setError] = useState();
  const styles = useStyles();
  const history = useHistory();
  const [state, setState] = useState(['']);
  const [selectState, setSelectState] = useState('');
  const [city, setCity] = useState(['']);
  const fetchStates = async () => {
    await axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => setState(response.data));
  };

  const fetchCity = async () => {
    await axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectState}/municipios`,
      )
      .then((response) => setCity(response.data));
  };
  useEffect(() => {
    fetchStates();
    fetchCity();
  }, [selectState]);
  const initialValues = {
    name: '',
    type: '',
    estado: '',
    cidade: '',
    endereco: '',
    players_quantity: 0,
    start_date: '',
    end_date: '',
    description: '',
    rules: 'ok',
  };

  const submitTournament = async (values) => {
    try {
      await Tournament.createTournament(values);
      history.push('/mytournament');
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <Appbar style={{ width: '100%' }} />
      <Container
        maxWidth="xs"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" align="center" style={{ marginTop: 10 }}>
          Cadastre seu torneio
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={(values) => {
            submitTournament(values);
          }}
        >
          {({ submitForm, dirty, isValid }) => (
            <Form>
              <MuiThemeProvider theme={theme}>
                <Field
                  className={styles.name}
                  component={TextField}
                  name="name"
                  label="Nome do torneio"
                  fullWidth
                  type="text"
                />

                <FormControl className={styles.type}>
                  <InputLabel style={{ color: '#000000' }}>
                    Tipo de torneio
                  </InputLabel>
                  <Field
                    name="type"
                    label="Tipo de torneio"
                    fullWidth
                    component={Select}
                  >
                    <MenuItem value="P">Playoff</MenuItem>
                  </Field>
                </FormControl>

                <FormControl className={styles.type}>
                  <InputLabel style={{ color: '#000000' }}>Estado</InputLabel>
                  <Field
                    name="estado"
                    label="Estado"
                    fullWidth
                    component={Select}
                  >
                    {state.map((states, id) => {
                      return (
                        <MenuItem
                          key={id}
                          onClick={() => setSelectState(states.sigla)}
                          value={states.sigla}
                        >
                          {states.sigla}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>

                <FormControl className={styles.type}>
                  <InputLabel style={{ color: '#000000' }}>Cidade</InputLabel>
                  <Field
                    name="cidade"
                    label="Cidade"
                    fullWidth
                    component={Select}
                  >
                    {city.map((cities, id) => {
                      return (
                        <MenuItem key={id} value={cities.nome}>
                          {cities.nome}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>

                <Field
                  className={styles.address}
                  component={TextField}
                  name="endereco"
                  label="Endereço"
                  fullWidth
                  type="text"
                />
                <FormControl className={styles.type}>
                  <InputLabel style={{ color: '#000000' }}>
                    Nũmero de jogadores
                  </InputLabel>
                  <Field name="players_quantity" fullWidth component={Select}>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Field>
                </FormControl>

                <Box>
                  <Field
                    className={styles.initDate}
                    component={TextField}
                    label="Início"
                    type="date"
                    defaultValue=""
                    name="start_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <Field
                    className={styles.finishDate}
                    component={TextField}
                    label="Término"
                    type="date"
                    defaultValue=""
                    name="end_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Field
                  component={TextField}
                  name="description"
                  label="Descrição"
                  fullWidth
                  multiline
                  type="text"
                />
              </MuiThemeProvider>
              <MuiThemeProvider theme={button}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitForm}
                  style={{ marginBottom: '20px', marginTop: '20px' }}
                  fullWidth
                  disabled={!dirty || !isValid}
                >
                  Criar Torneio
                </Button>
              </MuiThemeProvider>
            </Form>
          )}
        </Formik>
      </Container>
      <div className={styles.footer} />
      <Navbar />
    </>
  );
};

export default CreateTournament1;
