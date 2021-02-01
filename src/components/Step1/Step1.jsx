import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Typography } from '@material-ui/core';
import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { Form } from '../WrapperComponents/WrapperForm/WrapperForm';
import { Input } from '../Input/Input';
import { PrimoryButton } from '../PrimatyButton/PrimoryButton';

const schema = yup.object().shape({
  firstName: yup.
    string().
    matches(/^([^0-9]*)$/, 'Цифры не допустимы в имени')
    .required('Поле обязательно к заполнению'),
  lastName: yup.
    string().
    matches(/^([^0-9]*)$/, 'Цифры не допустимы в фамилии')
    .required('Поле обязательно к заполнению'),
});

export const Step1 = () => {
  /**
   * register - это будет наш реф
   * handleSubmit - функция для получения данных при собмите
   * errors - обьект для рендринга ошибок валидации
   */
  const { register, handleSubmit, errors} = useForm({
    mode: 'onBlur', // когда снимаем фокус с инпута тогда начинается валидация 
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <WrapperMainContainer>
      <Typography component='h2' variant='h5'>Step 1</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
          errors={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input 
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
          errors={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimoryButton>Next</PrimoryButton>
      </Form>
    </WrapperMainContainer>
  );
};