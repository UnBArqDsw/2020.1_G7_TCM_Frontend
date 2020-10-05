import React from 'react'
import {Container} from '@material-ui/core';
import { useStyles } from './style';
import AppBar from '../../components/Appbar';
import Navbar from '../../components/Navbar';


const Profile = () => {
    const classes = useStyles();    
    return(
        <Container className={classes.styleDiv}>
            <AppBar/>
            <div className={classes.footer}>
                <Navbar/>
            </div>
        </Container>
    );
}

export default Profile;

