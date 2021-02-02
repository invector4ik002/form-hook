import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useData } from '../../DataContext/DataContext';
import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Input } from '../Input/Input';
import { WrapprForm } from '../WrapperComponents/WrapperForm/WrapperForm';
import { PrimoryButton } from '../PrimatyButton/PrimoryButton';
import parsePhoneNumberFromString from 'libphonenumber-js';

const schema = yup.object().shape({
  email: yup.string().email('Введите корректный email').required('Поле обязательно к заполнению'),
});
const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value)
  if(!phoneNumber) {
    return value
  }
  return phoneNumber.formatInternational()
};

export const Step2 = () => {

  const { data, setValues } = useData();
  const history = useHistory();
  /**
   * register - это будет наш реф
   * handleSubmit - функция для получения данных при собмите
   * errors - обьект для рендринга ошибок валидации
   * watch - 
   */
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {email:data.email, hasPhone:data.hasPhone, phoneNumber:data.phoneNumber},
    mode: 'onBlur', // когда снимаем фокус с инпута тогда начинается валидация 
    resolver: yupResolver(schema)
  });
  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push('/step3');
    setValues(data);
  };

  return (
    <WrapperMainContainer>
      <Typography component='h2' variant='h5'>Step 2</Typography>
      <WrapprForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id='email'
          type='email'
          label='Email'
          name='email'
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
          >
        </Input>
        <FormControlLabel
          control={
            <Checkbox 
              defaultValue={data.hasPhone}
              checked={data.hasPhone}
              name='hasPhone' 
              inputRef={register} 
              color='primary' 
            />
          }
          label='Ваш номер телефона'
        />
        {hasPhone && (
          <Input
            ref={register}
            id='phoneNumber'
            type='tel'
            label='Phone Number'
            name='phoneNumber'
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value)
            }}
          >
          </Input>
        )}
        <PrimoryButton>Next</PrimoryButton>
      </WrapprForm>
    </WrapperMainContainer>
  )
};