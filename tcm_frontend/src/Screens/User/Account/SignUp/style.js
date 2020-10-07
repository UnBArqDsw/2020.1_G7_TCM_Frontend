import { Typography, createMuiTheme, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #56c60b 0.01%, #51cca4 56.77%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

export const Registro = styled(Typography)`
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
