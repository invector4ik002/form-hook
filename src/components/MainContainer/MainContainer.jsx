import React from 'react';
import Container from '@material-ui/core';
import  makeStylus  from '@material-ui/core';

export const MainContsiner = ({ children, ...props }) => {

  return (
    <Container container='main' max='xs'>
      {children}
    </Container>
  );
};