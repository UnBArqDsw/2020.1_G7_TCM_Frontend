import React from 'react'
import {Container} from '@material-ui/core';
import { useStyles } from './style';
import AppBar from '../../components/Appbar';
import Navbar from '../../components/Navbar';
import Avatar from '@material-ui/core/Avatar';

import Logo from '../../assets/profile.jpg';

const Profile = () => {
    const classes = useStyles();    
    return(
        <Container className={classes.styleDiv}>
            <AppBar/>
            <div className={classes.footer}>
                <Navbar/>
            </div>
            <div className={classes.avatar}>
                <Avatar alt="Remy Sharp" src={Logo} />
            </div>
        </Container>
    );
}

export default Profile;

