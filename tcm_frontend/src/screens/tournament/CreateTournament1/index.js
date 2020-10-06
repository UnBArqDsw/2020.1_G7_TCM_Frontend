import React from 'react';
import { Formik, Field, Form } from 'formik';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';

import { makestyles } from './style';

const CreateTournament1 = () => {
  const styles = makestyles();

  return (
    <div className={styles.container}>
      <Appbar />
      <p className={styles.title}>Cadastre seu torneio</p>
      <Formik>
        <Form className={styles.formik_form}>
          <Field
            name="name"
            placeholder="Nome do torneio"
            type="text"
            className={styles.select}
          />
          <Field
            as="select"
            name="type"
            placeholder="Tipo"
            type="text"
            className={styles.select}
          >
            <option value="red">Tipo</option>
          </Field>
          <Field
            as="select"
            name="state"
            placeholder="Estado"
            type="text"
            className={styles.select}
          >
            <option value="red">Estado</option>
          </Field>
          <Field
            as="select"
            name="city"
            placeholder="Cidade"
            type="text"
            className={styles.select}
          >
            <option value="red">Cidade</option>
          </Field>
          <Field
            as="select"
            name="age"
            placeholder="Faixa etária"
            type="text"
            className={styles.select}
          >
            <option value="red">Faixa etária</option>
          </Field>
          <Field
            as="select"
            name="level"
            placeholder="Nível do torneio"
            type="text"
            className={styles.select}
          >
            <option value="red">Nível do torneio</option>
          </Field>
          <Field
            as="select"
            name="block-type"
            placeholder="Tipo de quadra"
            type="text"
            className={styles.select}
          >
            <option value="red">Tipo de quadra</option>
          </Field>
          {/* <Field as="select" name="state" placeholder="Estado" type="text" />
          <Field as="select" name="city" placeholder="Cidade" type="text" />
          <Field
            as="select"
            name="age"
            placeholder="Faixa Etária"
            type="text"
          />
          <Field
            as="select"
            name="level"
            placeholder="Nível do torneio"
            type="text"
          />
          <Field
            as="select"
            name="block_type"
            placeholder="Tipo de quadra"
            type="text"
          />
          <Field as="select" /> */}
        </Form>
      </Formik>
      <div className={styles.footer}>
        <Navbar />
      </div>
    </div>
  );
};

export default CreateTournament1;
