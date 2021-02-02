import React from 'react';
import { useHistory } from 'react-router-dom';

import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { Typography } from '@material-ui/core';
import { WrapprForm } from '../WrapperComponents/WrapperForm/WrapperForm';
import { FileInput } from '../Fileinput/Fileinput';
import { useForm } from 'react-hook-form';
import { PrimoryButton } from '../PrimatyButton/PrimoryButton';
import { useData } from '../../DataContext/DataContext';

export const Step3 = () => {
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files:data.files
    },
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/result');
    setValues(data)
    console.log(data);
  };

  return (
    <WrapperMainContainer>
      <Typography component='h2' variant='h5'>Step 3</Typography>
      <WrapprForm onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control}/>
        <PrimoryButton>Next</PrimoryButton>
      </WrapprForm>
    </WrapperMainContainer>
  )
}