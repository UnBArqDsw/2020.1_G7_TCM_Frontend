import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    background: 'linear-gradient(180deg, #56C60B 0.01%, #51CCA4 56.77%)',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      height: '150%',
    },
    [theme.breakpoints.only('xs')]: {
      height: '100%',
    },
  },
  styleBox: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleLogo: {
    width: '25vh',
    height: '25vh',
    marginTop: '5vh',
    opacity: '50%',
    [theme.breakpoints.only('md')]: {
      width: '40vh',
      height: '40vh',
    },
  },
  styleInputEmail: {
    marginTop: '5vh',
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
    margin: '0px 5vh 5vh 0px',
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
      margin: '30px 0px',
    },
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
  },
}));
