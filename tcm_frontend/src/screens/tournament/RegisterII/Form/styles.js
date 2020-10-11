import {makeStyles } from '@material-ui/core';
import styled from 'styled-components';

// const useStyles = makeStyles((theme) => ({
//     styleInput: {
//         height: '70%';
//         width: '90%';
//         backgroundColor:'#EAEAEA';
//         borderRadius: '10px';
//         marginTop: '1%';
//         '& .MuiInputLabel-root': {
//           color: '#000000';
//           height: '100%'
//         };
//         '& label.Mui-focused': {
//           color: '#000000';
//           border:'none';
//         };
//         '& .MuiInput-underline:after': {
//             border:'none';
//         };
//         '& .MuiInput-underline:before': {
//           border:'none';
//         };
//         '
//         & .MuiInput-underline:hover': {
//           borderBottomColor: '#fff';
//         };
//         '& .MuiInputBase-input': {
//           color: "#000000";
//           background: "#EAEAEA";
//           height: '100%'

//         };
//         '& .MuiInputBase-root':{
//           height: '100%'
//         }
//       };
export const Wrapper = styled.div`
height: 100%;
flex-direction: column;
align-items: center;
`;

export const descricao = styled.div`
    width: 90%;
    height: 90%;
    // display: 'flex';
    gridRow: '1';
    // alignItems: 'center';
    justifyContent: 'center';
    // background: "red"
`;


export const Container = styled.div`
left: 50%;
width: 90%;
position: relative;
top: 50%;
transform: translate(-50%, -50%);

`;


