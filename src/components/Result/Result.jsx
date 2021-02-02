import React from 'react';
import { Link } from 'react-router-dom';
import { TableBody, TableContainer, TableHead, Typography } from '@material-ui/core';
import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { useData } from '../../DataContext/DataContext';

export const Result = () => {
  const {date} = useData()
  return (
    <WrapperMainContainer>
      <Typography component='h2' variant='h5'>
        Form Values
      </Typography>
      <TableContainer>
        <TableHead>

        </TableHead>
        <TableBody>
          
        </TableBody>
      </TableContainer>
    </WrapperMainContainer>
  )
}