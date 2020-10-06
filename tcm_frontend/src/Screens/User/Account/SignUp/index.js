import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Container,
  Typography,
  Grid,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { TextField, Select } from 'formik-material-ui';
import { useStyles } from './style';

const contactSchema = Yup.object().shape({
  username: Yup.string('Username Inválido')
    .required('Username é obrigatório')
    .min(3, 'Deve conter pelo menos 3 caracteres')
    .matches(/^ [0-9a-zA-Z]+/, 'Não utilize caracteres epeciais'),
  name: Yup.string('Nome Inválido')
    .required('Nome é obrigatório')
    .min(3, 'Deve conter pelo menos 3 caracteres')
    .matches(/^[a-z]$/, 'O nome deve possuir apenas letras'),
  email: Yup.string()
    .email('Email não é valido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Por favor digite sua senha')
    .matches(/^[a-z0-9]{3,15}$/, 'Senha deve conter pelo menos 8 digitos'),
  confirmPassword: Yup.string()
    .required('Por favor confirme sua senha')
    .when('password', {
      is: (password) => !!(password && password.length > 0),
      then: Yup.string().oneOf([Yup.ref('password')], 'Senhas não coincidem'),
    }),
  date: Yup.date().required('Data de Nascimento é requirida'),
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
  };
  return (
    <Container maxWidth="xs" className={classes.styleDiv}>
      <Grid
        alignItems="center"
        container
        direction="column"
        className={classes.styleBox}
      >
        <Grid className={classes.styleRegister}>
          <Typography variant="h4">Registro</Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={() => {}}
        >
          {({ submitForm, isSubmitting }) => (
            <Form style={{ width: '90%' }}>
              <Field
                component={TextField}
                className={classes.styleInput}
                name="username"
                type="username"
                label="Username"
                inputProps={{ 'data-testid': 'username' }}
                fullWidth
              />
              <Field
                component={TextField}
                className={classes.styleInput}
                name="name"
                type="name"
                label="Nome Completo"
                inputProps={{ 'data-testid': 'name' }}
                fullWidth
              />
              <Field
                component={TextField}
                className={classes.styleInput}
                name="email"
                type="email"
                label="Email"
                inputProps={{ 'data-testid': 'email' }}
                fullWidth
              />
              <br />
              <Field
                component={TextField}
                className={classes.styleInput}
                type="password"
                label="Senha"
                name="password"
                fullWidth
              />
              <Field
                component={TextField}
                className={classes.styleInput}
                type="password"
                label="Confirmar senha"
                name="confirmPassword"
                fullWidth
              />

              <Field
                style={{ marginTop: '15px' }}
                component={TextField}
                className={classes.styleInput}
                label="Data de nascimento"
                fullWidth
                type="date"
                defaultValue=""
                name="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl className={classes.styleLevel}>
                <InputLabel>Nivel do Jogador</InputLabel>
                <Field
                  component={Select}
                  type="select"
                  name="nivel"
                  className={classes.styleLevelSelect}
                  variant="standard"
                >
                  <MenuItem value="Amador">Amador</MenuItem>
                  <MenuItem value="Intermediário">Intermediário</MenuItem>
                  <MenuItem value="Profissional">Profissional</MenuItem>
                </Field>
              </FormControl>
              {isSubmitting && <LinearProgress />}
              <br />
              <Button
                className={classes.styleButton}
                variant="contained"
                color="primary"
                onClick={submitForm}
                data-testid="entrar"
                fullWidth
              >
                Cadastrar
              </Button>
              <Button
                className={classes.styleButton}
                variant="contained"
                color="primary"
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
      </Grid>
    </Container>
  );
};
export default SignUp;
