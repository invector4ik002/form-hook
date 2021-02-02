import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor:'#eee',
      textAlign:'center',
      cursor:'pointer',
      color:'#333',
      padding: '10px',
      marginTop: '20px',
    },
    icon: {
      fontSize: '35px',
    }
  }
}) 

export const FileInput = ({ control, name }) => {
  const styles = useStyles()
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ onChange, onBlur, value  }) => {
        return(
          <>
          <Dropzone onDrop={onChange} >
            {
              ({getRootProps, getInputProps}) => (
                <Paper variant='outlined'{...getRootProps()} className={styles.root}>
                  <CloudUploadOutlinedIcon className={styles.icon}/>
                  <input name={name} onBlur={onBlur} {...getInputProps()}/>
                  <p>перетащите сюда файлы или кликните, чтобы выбрать файлы</p>
                </Paper>
              ) 
            }
          </Dropzone>
          <List>
            {
              value.map((f, idx) => (
                <ListItem key={idx}>
                   <ListItemIcon>
                     <InsertDriveFileIcon/>
                   </ListItemIcon>
                   <ListItemText primary={f.name} secondary={f.size} />
                </ListItem>
              ))
            }
          </List>
          </>
        )
      }}
    />
  )
} 