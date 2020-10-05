import React from 'react';

import { makeStyles, Container, Typography, Box } from '@material-ui/core';
import Appbar from '../../../components/Appbar';
import Navbar from '../../../components/Navbar';
import Formregister from './Form';

export const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        margin: '0',
        padding: '0',
        justify:"flex-start", alignItems:"center"

        // display: 'block',
        // paddingRight: '0',
        // alignItems: 'center',
        // justify: 'center',
        // display: 'flex'

    },
    footer: {
        overflow: "hidden",
        position: "fixed",
        bottom: "0",
        width: "100%",
        
    },
    title: {
        textAlign: "center",
        marginTop: "1.2rem"
    },
    form: {
        justifyContent:'center',
        alignItems:'center',
        left:'50%'
    },
    styleBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh'
      },
}));

const ResgisterII = () => {
    const style = useStyles();
    return(
        <Container className={style.container}>
            <div >
                <Appbar/>
            </div>
            <Typography className={style.title}variant='h5'> Descrição do torneio</Typography>
            <Box className={style.styleBox}>
                <Formregister />
            </Box>
            

            <div className={style.footer}>
                <Navbar/>
            </div>
            
        </Container>
    );

}; 

export default ResgisterII;



