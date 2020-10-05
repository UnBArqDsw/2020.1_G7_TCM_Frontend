import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    styleDiv: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        margin: '0',
        padding: '0',
        alignItems: 'center',
        justify: 'flex-start',
    },
    footer: {
        overflow: 'hidden',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
    avatar: {
        background: '#',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          width: '20vh',
          height: '20vh', 
          marginTop: '5%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    
    },
    styleLink: {   
        color: '#000000',
        marginTop: '2%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.up('sm')]: {
        fontSize: '2.0rem',
        },
    }
}));
