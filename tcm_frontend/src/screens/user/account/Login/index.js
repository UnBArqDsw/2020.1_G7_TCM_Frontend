import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Container,
  Typography,
  Link,
  Grid,
  LinearProgress,
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { TextField } from 'formik-material-ui';
import { useStyles } from './style';

import Logo from '../../../../assets/logo2.svg';

const contactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email não é valido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(3, 'Tamanho minimo 3 caracteres'),
});

const Login = () => {
  const classes = useStyles();
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <>
      <Grid className={classes.styleDiv}>
        <Container maxWidth="xs" className={classes.styleContainer}>
          <Grid container direction="column" className={classes.styleBox}>
            <Grid className={classes.styleLogin}>
              <Typography variant="h4">Login</Typography>
              <img className={classes.styleLogo} src={Logo} alt="tcm" />
            </Grid>
            <Formik
              initialValues={initialValues}
              validationSchema={contactSchema}
              onSubmit={(values) => {console.log(values)}}
            >
              {({ submitForm, isSubmitting }) => (
                <Form style={{ width: '90%' }}>
                  <Field
                    component={TextField}
                    className={classes.styleInputEmail}
                    name="email"
                    type="email"
                    label="Email"
                    inputProps={{ 'data-testid': 'email' }}
                    fullWidth
                  />
                  <br />
                  <Field
                    component={TextField}
                    className={classes.styleInputPassword}
                    type="password"
                    label="Senha"
                    name="password"
                    fullWidth
                  />
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
                    Entrar
                  </Button>
                </Form>
              )}
            </Formik>
            <Link
              to="/signup"
              component={RouterLink}
              className={classes.styleLink}
            >
              Não possui conta? Registre-se
            </Link>
            <Link
              to="/signup"
              component={RouterLink}
              className={classes.styleLink}
            >
              Esqueceu a Senha?
            </Link>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Login;
