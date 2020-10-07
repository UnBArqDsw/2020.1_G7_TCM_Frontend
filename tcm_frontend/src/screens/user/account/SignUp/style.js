import { Typography, createMuiTheme, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #56c60b 0.01%, #51cca4 56.77%);
  flex-direction: column;
  align-items: center;
  @media screen and (device-aspect-ratio: 40/71) {
    height: 115vh;
  }

  @media only screen and (min-device-width: 280px) and (max-device-width: 578px) {
    height: 115vh;
  }

  @media screen and (device-aspect-ratio: 2/3) {
    height: 135vh;
  }
  @media only screen and (min-device-width: 280px) and (max-device-width: 578px) and (orientation: landscape) {
    height: 200vh;
  }
  @media only screen and (min-device-width: 579px) and (max-device-width: 670px) and (orientation: landscape) {
    height: 170vh;
  }
  @media only screen and (min-device-width: 671px) and (max-device-width: 900px) and (orientation: landscape) {
    height: 160vh;
  }
`;

export const Container = styled.div`
  background: 'black';
  left: 50%;
  width: 90%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Registro = styled(Typography)`
  text-align: center;
  color: #fff;
`;

export const useStyles = makeStyles((theme) => ({
  styleButton: {
    marginTop: '10px',
  },
  styleLevel: {
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '15px',
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.3)',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  shape: {
    borderRadius: '5px',
  },
});
