import  React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, makeStyles } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles((theme) => ({
    styleInput: {
        marginTop: '5vh',
        '& .MuiInputLabel-root': {
          color: '#000000',
        },
        '& label.Mui-focused': {
          color: '#000000',
          border:'none',
        },
        '& .MuiInput-underline:after': {
            border:'none',
        },
        '& .MuiInput-underline:before': {
          border:'none',
        },
        '& .MuiInput-underline:hover': {
          borderBottomColor: '#fff',
        },
        '& .MuiInputBase-input': {
          color: "#000000",
          background: "#EAEAEA"
        },
      },
    
container: {
    width: "90%",
    // background: "red"
},
teste:{
    background: "#00000"
}
}));

const Formregister = () => {
    const style = useStyles();
  return (
    <Formik
    className={style.container}
      initialValues={{
        description: '',
      }}
        
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className={style.container}>
          <Field
            className={style.styleInput}
            component={TextField}
            variant="filled"
            multiline
            name="description"
            type="text"
            label="Description"
            fullWidth
          />
         
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            // color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default Formregister;