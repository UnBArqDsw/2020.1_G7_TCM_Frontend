/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';
import { useStyles } from './styles';

const Opponents = (props) => {
  const classes = useStyles();
  const { player1, player2 } = props.match;

  const name1 = player1.name.split(' ', 1);
  const name2 = player2.name.split(' ', 1);
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: '20px',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar className={classes.avatar}>{name1[0][0]}</Avatar>
        <Typography align="center" gutterBottom className={classes.stylefont}>
          {name1}
        </Typography>
      </Box>
      <ClearIcon />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar className={classes.avatar}>{name2[0][0]}</Avatar>
        <Typography align="center" className={classes.stylefont}>
          {name2}
        </Typography>
      </Box>
    </Box>
  );
};
export default Opponents;
