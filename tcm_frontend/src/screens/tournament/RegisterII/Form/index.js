import  React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button,ThemeProvider } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Container, Wrapper, theme } from './styles.js'
import ButtonBox from '../../../../components/Buttonbox';
import * as Yup from 'yup';


const Formregister = () => {
  const initialValues = {
    descricao: ''
  }
    // const style = useStyles();
  return (
    <Wrapper>

          <Container>
            <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <ThemeProvider theme={theme}>
                  <Field
                    component={TextField}
                    name="descricao"
                    type="text"
                    label="Descricao"
                    fullWidth
                    variant="filled"
                    multiline
                    rows={15}
                    // rowsMax={4}
                    inputProps={{maxLength: 500, disableUnderline: true}}
                  />
                  </ThemeProvider>
                  <ButtonBox click={submitForm} route={'create_tournament'}/>
                </Form>
              )}
            </Formik>
            
          </Container>
          </Wrapper>

          
  );
}

export default Formregister;