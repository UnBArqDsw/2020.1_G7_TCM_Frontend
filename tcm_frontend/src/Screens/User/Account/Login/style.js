import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    height: '100%',
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
  },
  styleContainer: {
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
    display: 'block',
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  styleBox: {
    alignItems: 'center',
  },
  styleLogin: {
    '& > :first-child': {
      marginTop: '10%',
      color: 'white',
      textAlign: 'center',
    },
    '& > :last-child': {
      marginTop: '5vh',
      width: '25vh',
      height: '25vh',
      opacity: '50%',
    },
  },
  styleInputEmail: {
    margin: '2vh 0px',
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
  styleInputPassword: {
    marginBottom: '5vh',
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
  styleButton: {
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    marginBottom: '5vh',
  },
  styleLink: {
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
  },
}));
