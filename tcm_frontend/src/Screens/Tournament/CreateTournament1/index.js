import React from 'react';
import { Formik, Field, Form } from 'formik';

const CreateTournament1 = () => {
  return (
    <div id="App">
      <p className="titulo">Cadastre seu torneio</p>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
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
    </div>
  );
};

export default CreateTournament1;
