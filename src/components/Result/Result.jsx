import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import {Table, Paper, TableBody, TableCell, TableContainer,ListItemText, TableHead, TableRow, Typography, ListItem, ListItemIcon } from '@material-ui/core';
import List from '@material-ui/core/List';
import { WrapperMainContainer } from '../WrapperComponents/WrapperMainContainer/WrapperMainContainer';
import { useData } from '../../DataContext/DataContext';
import { InsertDriveFile } from '@material-ui/icons';
import { PrimoryButton } from '../PrimatyButton/PrimoryButton';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti'

const useStyles = makeStyles({
  root:{
    marginBottom: '30px',
  },
  table: {
    marginBottom: '30px',
  }
})

export const Result = () => {
  const [success, setSuccess] = useState(false);
  const styles = useStyles();
  const {data} = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
  const {files} = data;

  const onSubmit = () => {
    setSuccess(true) 
    Swal.fire('Great job!', 'You ve passed tne challenge', 'success');
  }


/**
 * если есть сервер
 */
  // const onSubmit = async () => {
  //   const formData = new FormData();

  //   if(data.files) {
  //     data.files.forEach((file) => {
  //       formData.append('files', file, file.name)
  //     });
  //   }
  //   entries.forEach(() => {
  //     formData.append(entry[0], entry[1])
  //   })

  //   const res = await fetch('http://localhost:4000/', {
  //     method: 'POST',
  //     body: formData
  //   })

  //   if(res.status == 200){
  //     Swal.fire('Great job!', 'You ve passed tne challenge', 'success');
  //     setSuccess(true);
  //   }
  // }

 
  // console.log(success)
  if(success){
    return (
      <Confetti/>
    )
  }


  return (
    <WrapperMainContainer>
     {/* {success && <Confetti/>} */}

      <Typography className={styles.root} component='h2' variant='h5'>
        Form Values
      </Typography>

      <TableContainer className={styles.table} component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Fied</TableCell>
              <TableCell align='right'>value</TableCell>
            </TableRow>             
          </TableHead>
  
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}> 
                <TableCell>{entry[0]}</TableCell>
                <TableCell align='right'>{entry[1].toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component='h2' variant='h5'>
            Files
          </Typography>
          <List>
            {
              files.map((f, idx) => (
                <ListItem key={idx}>
                    <ListItemIcon><InsertDriveFile/></ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size}/>
                </ListItem>
              ))
            }
          </List>
        </>
      )

      }
      <PrimoryButton onSubmit={onSubmit}>Submit</PrimoryButton>
      <Link to='/'>Start over</Link>
    </WrapperMainContainer>
  )
}