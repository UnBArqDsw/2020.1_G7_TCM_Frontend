import { makeStyles } from '@material-ui/core/styles';

export const makestyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: '0',
    margin: '0',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    fontWeight: 'bold',
  },

  formik_form: {
    display: 'flex',
    flexDirection: 'column',
  },

  select: {
    marginLeft: '35px',
    marginRight: '35px',
    marginTop: '35px',
    fontSize: '18px',
    border: 'none',
    borderBottom: '2px solid #000000',
    backgroundColor: '#ffffff',
  },

  //   select_text: {
  //     fontSize: '20px',
  //     color: '#FF0000',
  //   },

  footer: {
    bottom: '0px',
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },
});
