import {makeStyles, createMuiTheme } from '@material-ui/core';
import styled from 'styled-components';


export const Wrapper = styled.div`
height: 75%;
flex-direction: column;
align-items: center;
width: 90%;
// background: red;
`;


export const Container = styled.div`
left: 50%;
position: relative;
top: 50%;
transform: translate(-50%, -50%);
`;

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000',
      },
      background: {
        default: '#e5e5e5',
      },
      text: {
        primary: '#000',
        secondary: '#000',
      },
    },
  });


