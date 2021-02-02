import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(3, 0, 2),
    }
  }
});

export const PrimoryButton = ({ children, onSubmit}) => {
  const styles = useStyles()

  return (
    <Button 
      className={styles.root}
      type='submit' 
      fullWidth 
      variant='contained' 
      color='primary' 
      onClick={onSubmit}
    >
      {children}
    </Button>
  );
};