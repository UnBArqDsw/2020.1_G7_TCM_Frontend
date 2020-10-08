import React from 'react';

import {
  Container,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  ThemeProvider,
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { TextField, Select } from 'formik-material-ui';
import { useStyles, muiTheme } from '../style';
import ButtonClearOrCheck from '../../../components/ButtonClearOrCheck';

const contactSchema = Yup.object().shape({});

const FormProfile = () => {
  const classes = useStyles();
  const initialValues = {
    nome: '',
    username: '',
  };

  return (
    <Container maxWidth="md" className={classes.styleFormProfile}>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={() => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <ThemeProvider theme={muiTheme}>
              <Field
                component={TextField}
                color="secondary"
                name="nome"
                type="nome"
                label="Nome"
                fullWidth
              />
              <br />
              <Field
                component={TextField}
                className={classes.styleInputUsername}
                type="username"
                label="Username"
                name="Username"
                fullWidth
              />
              <Field
                component={TextField}
                className={classes.styleInputDate}
                label="Data de nascimento"
                fullWidth
                type="date"
                defaultValue=""
                name="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {isSubmitting && <LinearProgress />}
              <br />
              <FormControl className={classes.styleLevel}>
                <InputLabel className={classes.InputLabel}>
                  Nivel do Jogador
                </InputLabel>
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
              <ButtonClearOrCheck />
            </ThemeProvider>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormProfile;
