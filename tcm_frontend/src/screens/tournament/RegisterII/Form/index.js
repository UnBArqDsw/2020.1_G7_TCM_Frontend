import  React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Container, Wrapper } from './styles.js'


const Formregister = () => {
    // const style = useStyles();
  return (
    <Wrapper>

          <Container>
            <Formik
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values, null, 2));
                }, 500);
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Field
                    component={TextField}
                    name="descricao"
                    type="descricao"
                    label="Descricao"
                  />
                  {isSubmitting }
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
            
          </Container>
          </Wrapper>

          
  );
}

export default Formregister;