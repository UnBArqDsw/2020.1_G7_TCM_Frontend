/* eslint-disable */
import React from 'react';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { Link as RouterLink } from 'react-router-dom';
import { makestyles } from './style';

const ButtonClearOrCheck = (props) => {
  const styles = makestyles();

  return (
    <Box className={styles.buttonBox}>
      <IconButton
        aria-label="do_other_thing"
        to={props.route}
        component={RouterLink}
      >
        <CloseIcon className={styles.buttonClose} />
      </IconButton>

      <IconButton
        aria-label="do_something"
        onClick={props.click}
        to={props.nextRoute}
        component={RouterLink}
      >
        <CheckIcon className={styles.buttonBoxCheckIcon} />
      </IconButton>
    </Box>
  );
};

export default ButtonClearOrCheck;