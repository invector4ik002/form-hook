import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { useData } from '../../DataContext/DataContext';
import { Typography } from '@material-ui/core';
import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { WrapprForm } from '../WrapperComponents/WrapperForm/WrapperForm';
import { Input } from '../Input/Input';
import { PrimoryButton } from '../PrimatyButton/PrimoryButton';

const schema = yup.object().shape({
  firstName: yup.string().matches(/^([^0-9]*)$/, 'Цифры не допустимы в имени').required('Поле обязательно к заполнению'),
  lastName: yup.string().matches(/^([^0-9]*)$/, 'Цифры не допустимы в фамилии').required('Поле обязательно к заполнению'),
});

export const Step1 = () => {
  const history = useHistory();
  const {data, setValues} = useData();

  const onSubmit = (data) => {
    history.push('/step2')
    setValues(data)
    console.log(data);
  };
  /**
   * register - это будет наш реф
   * handleSubmit - функция для получения данных при собмите
   * errors - обьект для рендринга ошибок валидации
   */
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {firstName:data.firstName, lastName:data.lastName},
    mode: 'onBlur', // когда снимаем фокус с инпута тогда начинается валидация 
    resolver: yupResolver(schema)
  });
  
 

  return (
    <WrapperMainContainer>
      <Typography component='h2' variant='h5'>Step 1</Typography>
      <WrapprForm onSubmit={handleSubmit(onSubmit)}>
        <Input 
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input 
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimoryButton>Next</PrimoryButton>
      </WrapprForm>
    </WrapperMainContainer>
  );
};