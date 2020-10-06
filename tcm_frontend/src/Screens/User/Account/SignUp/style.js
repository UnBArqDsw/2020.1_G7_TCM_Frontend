import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    height: '100vh',
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
  },
  styleBox: {
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  styleRegister: {
    color: 'white',
    textAlign: 'center',
  },
  styleInput: {
    marginTop: '10px',
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:hover': {
      borderBottomColor: '#fff',
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.secondary,
    },
  },
  styleLevel: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '10px 0px 20px 0px',

    '& .MuiFormLabel-root': {
      color: '#fff',
    },
  },
  styleLevelSelect: {
    width: '100%',
    '&': { color: 'white' },
    '&:before': {
      height: '1px',
      backgroundColor: 'white',
    },
    '&:after': {
      height: '1px',
      backgroundColor: 'white',
    },
  },
  styleButton: {
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    marginBottom: '5%',
  },
}));
