import { makeStyles } from '@material-ui/core/styles';

export const makestyles = makeStyles((theme) => ({
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
    margin: '2% 0px',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '2px solid #000000',
  },

  select: {
    fontSize: '18px',
    border: 'none',
    borderBottom: '2px solid #000000',
    backgroundColor: '#ffffff',
    margin: '2% 0px',
    '&:before': {
      borderColor: '#000',
    },
    '&:after': {
      borderColor: '#000',
    },
    '& .MuiInputLabel-root': {
      color: '#000',
    },
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#000',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#000',
    },
    '& .MuiInput-underline:hover': {
      borderBottomColor: '#000',
    },
    '& .MuiInputBase-input': {
      color: '#000',
    },
  },

  footer: theme.mixins.toolbar,

  dateInput: {
    color: '#000',
    backgroundColor: '#FF0000',
  },
}));
