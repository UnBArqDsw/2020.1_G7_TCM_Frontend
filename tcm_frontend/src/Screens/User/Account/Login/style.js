import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  styleBox: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLogo: {
    width: '157px',
    height: '157px',
    marginTop: '10vh',
    opacity: '50%',
  },
  styleInputEmail: {
    marginTop: '40px',
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
    margin: '20px 0px',
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
    margin: '20px 0px',
    marginBottom: '20px',
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
  },
  styleLink: {
    '&:first-child': {
      marginTop: '30px',
    },
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
  },
}));
