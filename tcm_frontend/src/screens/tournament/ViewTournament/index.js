import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import CardAdversary from '../../../components/CardAdversary';
import { useStyles } from './styles';

const ViewTournament = () => {
  const classe = useStyles();
  return (
    <>
      <Container>
        <div>
          <Appbar />
        </div>
        <CardAdversary />
        <div className={classe.footer} />
      </Container>
      <Navbar />
    </>
  );
};

export default ViewTournament;
