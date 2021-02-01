import React from 'react';
import { TextField } from '@material-ui/core';

/**
 * forwardRef() пробрасывает ref в финальный елемент
 * так как form hook использует рефы для управления элиментами форм
 */
export const Input = React.forwardRef((props, ref)=> {
  return (
    <TextField 
      variant='outlined' 
      margin='normal' 
      inputRef={ref} 
      fullWidth
      {...props} 
    />
  )
});