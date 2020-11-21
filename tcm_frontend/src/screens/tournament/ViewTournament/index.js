/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import CardAdversary from '../../../components/CardAdversary';
import { useStyles } from './styles';

const ViewTournament = ({ location }) => {
  const { rounds, id } = location.state;
  console.log(rounds);
  const classe = useStyles();

  return (
    <>
      <Container>
        <div>
          <Appbar />
        </div>
        <CardAdversary rounds={rounds} idtournament={id} />
        <div className={classe.footer} />
      </Container>
      <Navbar />
    </>
  );
};

export default ViewTournament;
