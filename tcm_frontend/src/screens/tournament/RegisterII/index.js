import React from 'react';

import { Container, Typography, Box } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import Formregister from './Form';
import { useStyles } from './styles';

const ResgisterII = () => {
  const style = useStyles();
  return (
    <Container className={style.container}>
      <div>
        <Appbar />
      </div>
      <Typography className={style.title} variant="h5">
        {' '}
        Descrição do torneio
      </Typography>
      <Box className={style.styleBox}>
        <Formregister />
      </Box>
      <div className={style.footer}>
        <Navbar />
      </div>
    </Container>
  );
};

export default ResgisterII;
