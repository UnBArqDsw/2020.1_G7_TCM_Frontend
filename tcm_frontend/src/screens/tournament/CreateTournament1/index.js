import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Box, Container, FormControl } from '@material-ui/core';
import axios from 'axios';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import Buttonbox from '../../../components/Buttonbox';
import { makestyles } from './style';

const CreateTournament1 = () => {
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
    state: '',
    city: '',
    age: '',
    level: '',
    blockType: '',
    playersNumber: '',
    startDate: '',
    finishDate: '',
  };

  console.log(selectState);
  return (
    <>
      <Appbar style={{ width: '100%' }} />
      <Container maxWidth="xs">
        <p className={styles.title}>Cadastre seu torneio</p>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
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
                  <MenuItem value="Playoff">Playoff</MenuItem>
                </Field>
              </FormControl>

              <FormControl className={styles.formControl}>
                <InputLabel style={{ color: '#000000' }}>Estado</InputLabel>
                <Field name="state" label="Estado" fullWidth component={Select}>
                  {state.map((states) => {
                    return (
                      <MenuItem
                        onClick={() => setSelectState(states.sigla)}
                        key={states.id}
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
                <Field name="city" label="Cidade" fullWidth component={Select}>
                  {city.map((cities) => {
                    console.log(city);
                    return (
                      <MenuItem key={cities.id} value={cities.nome}>
                        {cities.nome}
                      </MenuItem>
                    );
                  })}
                </Field>
              </FormControl>

              <Field
                component={TextField}
                name="address"
                label="Endereço"
                fullWidth
                type="text"
                className={styles.select}
              />
              <FormControl className={styles.formControl}>
                <InputLabel style={{ color: '#000000' }}>
                  Nũmero de jogadores
                </InputLabel>
                <Field name="playersNumber" fullWidth component={Select}>
                  <MenuItem value="8">8</MenuItem>
                </Field>
              </FormControl>

              <Box className={styles.dateBox}>
                <Field
                  component={TextField}
                  className={styles.dateBoxStartDate}
                  label="Início"
                  type="date"
                  defaultValue=""
                  name="startDate"
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
                  name="finishDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Buttonbox click={submitForm} nextRoute="tournament2" />
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
