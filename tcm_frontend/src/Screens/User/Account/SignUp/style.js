import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    height: '100%',
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
  },
  styleContainer: {
    display: 'block',
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  styleBox: {
    alignItems: 'center',
  },
  styleRegister: {
    marginTop: '10%',
    color: 'white',
    textAlign: 'center',
  },
  styleInput: {
    marginBottom: '5%',
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
  styleSelect: {
    width: '100%',
    marginBottom: '5px',
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& ..MuiSelect-outlined:after': {
      borderBottom: '2px solid #fff',
    },
    '& ..MuiSelect-outlined:before': {
      borderBottom: '2px solid #fff',
    },
    '& ..MuiSelect-outlined:hover': {
      borderBottom: '2px solid #fff',
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.secondary,
    },
  },
  styleButton: {
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    marginBottom: '5%',
  },
  styleLink: {
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
  },
}));
