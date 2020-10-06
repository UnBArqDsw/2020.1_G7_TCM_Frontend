import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Box, Container, FormControl } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import { makestyles } from './style';

const CreateTournament1 = () => {
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

  return (
    <>
      <Appbar style={{ width: '100%' }} />
      <Container maxWidth="xs">
        <p className={styles.title}>Cadastre seu torneio</p>
        <Formik initialValues={initialValues}>
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
                <MenuItem value="DF">DF</MenuItem>
              </Field>
            </FormControl>

            <FormControl className={styles.formControl}>
              <InputLabel style={{ color: '#000000' }}>Cidade</InputLabel>
              <Field name="city" label="Cidade" fullWidth component={Select}>
                <MenuItem value="Brasília">Brasília</MenuItem>
              </Field>
            </FormControl>

            <FormControl className={styles.formControl}>
              <InputLabel style={{ color: '#000000' }}>Faixa etária</InputLabel>
              <Field
                name="age"
                label="Faixa etária"
                fullWidth
                component={Select}
              >
                <MenuItem value="18 - 55">18 - 55</MenuItem>
              </Field>
            </FormControl>

            <FormControl className={styles.formControl}>
              <InputLabel style={{ color: '#000000' }}>
                Nível do torneio
              </InputLabel>
              <Field
                name="level"
                label="Nível do torneio"
                fullWidth
                component={Select}
              >
                <MenuItem value="Brasília">Brasília</MenuItem>
              </Field>
            </FormControl>

            <FormControl className={styles.formControl}>
              <InputLabel style={{ color: '#000000' }}>
                Tipo de quadra
              </InputLabel>
              <Field
                name="blockType"
                label="Tipo de quadra"
                fullWidth
                component={Select}
              >
                <MenuItem value="Grama">Grama</MenuItem>
              </Field>
            </FormControl>

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
                className={styles.select}
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
                className={styles.select}
                label="Término"
                type="date"
                defaultValue=""
                name="finishDate"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          </Form>
        </Formik>
      </Container>
      <div className={styles.footer} />
      <Navbar />
    </>
  );
};

export default CreateTournament1;
