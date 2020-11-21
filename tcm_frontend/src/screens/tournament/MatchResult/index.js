import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { useStyles } from './styles';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

const MatchResult = (props) => {
  const classes = useStyles();

  const initialValues = {
    p1score: '',
    p2score: '',
  };

  const handleSubimit = async (data) => {
    console.log('entrei');
  };

  return (
    <>
      <Appbar />
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => handleSubimit(data)}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Container maxWidth="md" style={{ marginTop: '50%' }}>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Field
                  component={TextField}
                  className={classes.score1}
                  name="p1score"
                  type="number"
                  label="0"
                  variant="outlined"
                />
                <Typography variant="h5">X</Typography>
                <Field
                  component={TextField}
                  className={classes.score2}
                  name="p2score"
                  type="number"
                  label="0"
                  variant="outlined"
                />
              </Box>
            </Container>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button fullWidth>Voltar</Button>
              <Button fullWidth>Concluir</Button>
            </Box>
          </Form>
        )}
      </Formik>
      <Navbar />
    </>
  );
};

export default MatchResult;
