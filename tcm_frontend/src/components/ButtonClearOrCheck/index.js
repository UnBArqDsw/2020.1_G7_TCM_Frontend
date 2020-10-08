import React from 'react';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { makestyles } from './style';

const ButtonBox = () => {
  const styles = makestyles();

  return (
    <Box className={styles.buttonBox}>
      <IconButton aria-label="do_other_thing">
        <CloseIcon className={styles.buttonBoxArrowIcon} />
      </IconButton>

      <IconButton aria-label="do_something">
        <CheckIcon className={styles.buttonBoxCheckIcon} />
      </IconButton>
    </Box>
  );
};

export default ButtonBox;
