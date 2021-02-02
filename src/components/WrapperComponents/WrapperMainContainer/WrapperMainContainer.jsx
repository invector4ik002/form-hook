import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'40%',
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

export const WrapperMainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container className={styles.root} container='main' max='xs' {...props}>
      {children}
    </Container>
  )
};