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
    }
}));
