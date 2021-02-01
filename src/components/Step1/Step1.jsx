import React from 'react';
import { Typography } from '@material-ui/core';
import { MainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { Form } from '../WrapperComponents/WrapperForm/WrapperForm'

export const Step1 = () => {
  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>Step 1</Typography>
      <Form>

      </Form>
    </MainContainer>
  );
};