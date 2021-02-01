import React from 'react';
import { Typography } from '@material-ui/core';
import { MainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { Form } from '../WrapperComponents/WrapperForm/WrapperForm';
import { Input } from '../Input/Input';

export const Step1 = () => {
  /**
   * register - это будет наш реф
   * handleSubmit - функция для получения данных при собмите
   * errors - обьект для рендринга ошибок валидации
   */
  const { register, handleSubmit, errors} = useForm({
    mode: 'onBlur', // когда снимаем фокус с инпута тогда начинается валидация 
  })

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>Step 1</Typography>
      <Form>
        <Input 
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
        />
        <Input 
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
        />
      </Form>
    </MainContainer>
  );
};