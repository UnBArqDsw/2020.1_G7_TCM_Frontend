import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  ThemeProvider,
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { TextField, Select } from 'formik-material-ui';
import { Wrapper, Registro, Container, theme, useStyles } from './style';

const contactSchema = Yup.object().shape({
  username: Yup.string('Username Inválido')
    .required('Username é obrigatório')
    .min(3, 'Deve conter pelo menos 3 caracteres')
    .matches(/^[0-9a-zA-Z][0-9a-zA-Z]*$/, 'Não utilize caracteres epeciais'),
  name: Yup.string('Nome Inválido')
    .required('Nome é obrigatório')
    .min(3, 'Deve conter pelo menos 3 caracteres')
    .matches(/^[a-zA-Z ][a-zA-Z ]*$/, 'O nome deve possuir apenas letras'),
  email: Yup.string()
    .email('Email não é valido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Por favor digite sua senha')
    .matches(/^[a-z0-9]{3,15}$/, 'Senha deve conter pelo menos 3 digitos'),
  confirmPassword: Yup.string()
    .required('Por favor confirme sua senha')
    .matches(/^[a-z0-9]{3,15}$/, 'Senha deve conter pelo menos 3 digitos')
    .when('password', {
      is: (password) => !!(password && password.length > 0),
      then: Yup.string().oneOf([Yup.ref('password')], 'Senhas não coincidem'),
    }),
  date: Yup.date().required('Data de Nascimento é requirida'),
  level: Yup.string().required('Nível é obrigatório'),
});

const SignUp = () => {
  const classes = useStyles();
  const initialValues = {
    username: '',
    date: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    level: '',
  };
  return (
    <Wrapper>
      <Container>
        <Registro variant="h4">Registro</Registro>
        <ThemeProvider theme={theme}>
          <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ submitForm, isSubmitting, dirty, isValid }) => (
              <Form>
                <Field
                  color="primary"
                  component={TextField}
                  name="username"
                  type="username"
                  label="Username"
                  inputProps={{ 'data-testid': 'username' }}
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="name"
                  type="name"
                  label="Nome Completo"
                  inputProps={{ 'data-testid': 'name' }}
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  inputProps={{ 'data-testid': 'email' }}
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Senha"
                  name="password"
                  fullWidth
                />
                <Field
                  component={TextField}
                  type="password"
                  label="Confirmar senha"
                  name="confirmPassword"
                  fullWidth
                />
                <Field
                  component={TextField}
                  label="Data de nascimento"
                  fullWidth
                  type="date"
                  name="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormControl
                  htmlFor="age-simple"
                  className={classes.styleLevel}
                >
                  <InputLabel>Nivel do Jogador</InputLabel>
                  <Field
                    component={Select}
                    type="select"
                    variant="standard"
                    style={{ width: '100%' }}
                    name="level"
                    inputProps={{
                      id: 'age-simple',
                    }}
                  >
                    <MenuItem value="Amador">Amador</MenuItem>
                    <MenuItem value="Intermediário">Intermediário</MenuItem>
                    <MenuItem value="Avançado">Profissional</MenuItem>
                  </Field>
                </FormControl>
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  className={classes.styleButton}
                  variant="contained"
                  color="secondary"
                  onClick={submitForm}
                  disabled={!dirty || !isValid}
                  data-testid="entrar"
                  fullWidth
                >
                  Cadastrar
                </Button>
                <Button
                  className={classes.styleButton}
                  variant="contained"
                  color="secondary"
                  to="/"
                  component={RouterLink}
                  data-testid="entrar"
                  fullWidth
                >
                  Voltar
                </Button>
              </Form>
            )}
          </Formik>
        </ThemeProvider>
      </Container>
    </Wrapper>
  );
};
export default SignUp;
