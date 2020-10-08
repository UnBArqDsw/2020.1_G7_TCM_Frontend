import { makeStyles } from '@material-ui/core/styles';

export const makestyles = makeStyles(() => ({
  buttonBox: {
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBoxArrowIcon: {
    color: '#191919',
    width: '30px',
    height: '30px',
  },
  buttonBoxCheckIcon: {
    color: '#47B812',
    width: '40px',
    height: '40px',
  },
}));
