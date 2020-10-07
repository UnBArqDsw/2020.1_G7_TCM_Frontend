import React from 'react';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { makestyles } from './style';

const ButtonBox = () => {
  const styles = makestyles();

  return (
    <Box className={styles.buttonBox}>
      <IconButton aria-label="do_other_thing">
        <ArrowBackIosIcon className={styles.buttonBoxArrowIcon} />
      </IconButton>

      <IconButton aria-label="do_something">
        <CheckIcon className={styles.buttonBoxCheckIcon} />
      </IconButton>
    </Box>
  );
};

export default ButtonBox;
