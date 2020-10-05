import React from 'react';

import {
  Container,
  LinearProgress,
  MenuItem
} from '@material-ui/core';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { TextField, Select } from 'formik-material-ui';
import { useStyles } from '../style';

const contactSchema = Yup.object().shape({
});

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
          {({ submitForm, isSubmitting }) => (
            <Form style={{ width: '90%' }}>
              <Field
                component={TextField}
                className={classes.styleInputName}
                name="nome"
                type="nome"
                label="nome"
                fullWidth
              />
              <br />
              <Field
                    style={{ width: '100%' }}
                    component={Select}
                    type="select"
                    name="nivel"
                  >
                    <MenuItem value="Amador">Amador</MenuItem>
                    <MenuItem value="Intermediário">Intermediário</MenuItem>
                    <MenuItem value="Profissional">Profissional</MenuItem>
                  </Field>
              <Field
                component={TextField}
                className={classes.styleInputUsername}
                type="username"
                label="Username"
                name="username"
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
            </Form>
          )}
        </Formik>
    </Container>
  );
};

export default FormProfile;
