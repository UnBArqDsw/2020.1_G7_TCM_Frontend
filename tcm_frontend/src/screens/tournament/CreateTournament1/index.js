import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Container, FormControl } from '@material-ui/core';
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
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: '#000000' }}
              >
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

            <Field
              as="select"
              name="state"
              placeholder="Estado"
              fullWidth
              type="text"
              className={styles.select}
            >
              <option value="red">Estado</option>
            </Field>
            <Field
              as="select"
              name="city"
              placeholder="Cidade"
              fullWidth
              type="text"
              className={styles.select}
            >
              <option value="red">Cidade</option>
            </Field>
            <Field
              as="select"
              name="age"
              placeholder="Faixa etária"
              fullWidth
              type="text"
              className={styles.select}
            >
              <option value="red">Faixa etária</option>
            </Field>
            <Field
              as="select"
              name="level"
              placeholder="Nível do torneio"
              fullWidth
              type="text"
              className={styles.select}
            >
              <option value="red">Nível do torneio</option>
            </Field>
            <Field
              as="select"
              name="blockType"
              placeholder="Tipo de quadra"
              fullWidth
              type="text"
              className={styles.select}
            >
              <option value="red">Tipo de quadra</option>
            </Field>
          </Form>
        </Formik>
      </Container>
      <Navbar />
    </>
  );
};

export default CreateTournament1;
