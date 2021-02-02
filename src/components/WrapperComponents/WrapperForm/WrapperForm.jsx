import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width:'40%',
      marginTop: theme.spacing(1)
    }
  }
})
/**
 * Компонент обертка 
 * noValidate // отключение стандартного повидения HTML валидатора  
 */
export const WrapprForm = ({ children, ...props }) => {
  const styles = useStyles()

  return (
    <form className={styles.root} noValidate {...props}>
      { children }
    </form>
  )
}

