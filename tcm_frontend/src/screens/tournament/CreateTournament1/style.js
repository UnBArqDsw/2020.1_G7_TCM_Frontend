import { makeStyles } from '@material-ui/core/styles';

export const makestyles = makeStyles({
  container: {
    display: 'flex',
    // width: '100%',
    flexDirection: 'column',
    padding: '0',
    margin: '0',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    fontWeight: 'bold',
  },

  formik_form: {
    display: 'flex',
    flexDirection: 'column',
  },

  formControl: {
    alignItems: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '2px solid #000000',
  },

  select: {
    fontSize: '18px',
    border: 'none',
    borderBottom: '2px solid #000000',
    backgroundColor: '#ffffff',
    margin: '15px 0px',
    '&:before': {
      borderColor: '#000',
    },
    '&:after': {
      borderColor: '#000',
    },
    '& .MuiInputLabel-root': {
      color: '#000',
    },
  },

  footer: {
    bottom: '0px',
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },
});
