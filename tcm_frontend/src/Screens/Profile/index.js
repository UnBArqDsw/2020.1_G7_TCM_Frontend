import React from 'react'
import {Container, Link} from '@material-ui/core';
import { useStyles } from './style';
import AppBar from '../../components/Appbar';
import Navbar from '../../components/Navbar';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/profile.jpg';
import  FormProfile from './FormProfile';

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
                <Link className={classes.styleLink}>
                    Editar foto
                </Link>
            </div>
            <FormProfile />
        </Container>
    );
}

export default Profile;

