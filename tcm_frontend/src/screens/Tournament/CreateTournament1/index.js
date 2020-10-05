import React from 'react';
import { Formik, Field, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

const makestyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: '0',
    margin: '0',
    backgroundColor: '#ffffff',
  },

  footer: {
    bottom: '0px',
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },
});

const CreateTournament1 = () => {
  const styles = makestyles();

  return (
    <div className={styles.container}>
      <Appbar />
      <p>Cadastre seu torneio</p>
      <Formik className="formik-form">
        <Form>
          <Field name="name" placeholder="Nome do torneio" type="text" />
          <Field name="type" placeholder="Tipo" type="text" />
          <Field name="state" placeholder="Estado" type="text" />
          <Field name="city" placeholder="Cidade" type="text" />
          <Field name="age" placeholder="Faixa Etária" type="text" />
          <Field name="level" placeholder="Nível do torneio" type="text" />
          <Field name="block_type" placeholder="Tipo de quadra" type="text" />
        </Form>
      </Formik>
      <div className={styles.footer}>
        <Navbar />
      </div>
    </div>
  );
};

export default CreateTournament1;
