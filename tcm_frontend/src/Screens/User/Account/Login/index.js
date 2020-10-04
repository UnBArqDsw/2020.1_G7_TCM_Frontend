import React from 'react';

import { Link as RouterLink } from 'react-router-dom';

import {
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Box,
} from '@material-ui/core';

import { useStyles } from './style';

import Logo from '../../../../assets/logo2.svg';

const Login = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.styleDiv}>
      <Box className={classes.styleBox}>
        <Typography variant="h4">Login</Typography>
        <img className={classes.styleLogo} src={Logo} alt="tcm" />
        <TextField
          className={classes.styleInputEmail}
          fullWidth
          label="Email"
        />
        <TextField
          className={classes.styleInputPassword}
          fullWidth
          label="Senha"
        />
        <Button className={classes.styleButton} variant="contained" fullWidth>
          Entrar
        </Button>
        <Link to="/signup" component={RouterLink} className={classes.styleLink}>
          Não possui conta? Registre-se
        </Link>
        <Link to="/signup" component={RouterLink} className={classes.styleLink}>
          Esqueceu a Senha?
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
