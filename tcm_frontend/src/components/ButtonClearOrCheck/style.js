import { makeStyles } from '@material-ui/core/styles';

export const makestyles = makeStyles(() => ({
  buttonBox: {
    marginTop: '15px',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonClose: {
    color: '#BD2020',
    width: '40px',
    height: '40px',
  },
  buttonBoxCheckIcon: {
    color: '#47B812',
    width: '40px',
    height: '40px',
  },
}));
