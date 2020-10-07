import { Typography } from '@material-ui/core';
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
  margin-top: 40px;
`;

export const Registro = styled(Typography)`
  color: #fff;
`;
