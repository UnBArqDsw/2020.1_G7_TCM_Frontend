/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Box, Container, FormControl, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import { makestyles } from './style';
import Tournament from '../../../services/tournament';

const CreateTournament1 = () => {
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
  const styles = makestyles();
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
    rules: 'olá',
  };

  const submitTournament = (values) => {
    Tournament.createTournament(values).then(history.push('/mytournament'));
  };
  return (
    <>
      <Appbar style={{ width: '100%' }} />
      <Container maxWidth="xs">
        <p className={styles.title}>Cadastre seu torneio</p>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            submitTournament(values);
          }}
        >
          {({ submitForm }) => (
            <Form className={styles.formik_form}>
              <Field
                component={TextField}
                name="name"
                label="Nome do torneio"
                fullWidth
                type="text"
                className={styles.select}
              />

              <FormControl className={styles.formControl}>
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

              <FormControl className={styles.formControl}>
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

              <FormControl className={styles.formControl}>
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
                component={TextField}
                name="endereco"
                label="Endereço"
                fullWidth
                type="text"
                className={styles.select}
              />
              <FormControl className={styles.formControl}>
                <InputLabel style={{ color: '#000000' }}>
                  Nũmero de jogadores
                </InputLabel>
                <Field name="players_quantity" fullWidth component={Select}>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Field>
              </FormControl>

              <Box className={styles.dateBox}>
                <Field
                  component={TextField}
                  className={styles.dateBoxStartDate}
                  label="Início"
                  type="date"
                  defaultValue=""
                  name="start_date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Field
                  component={TextField}
                  className={styles.dateBoxFinishDate}
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
                className={styles.select}
              />
              <Button
                variant="contained"
                onClick={submitForm}
                style={{ marginBottom: '20px', marginTop: '20px' }}
              >
                Criar Torneio
              </Button>
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
