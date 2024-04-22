
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';

import { setActiveNote } from '../../store/journal/journalSlice';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { startSaveNote } from '../../store/journal/thunks';

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }, [date]);


  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote =()=>{
    dispatch(startSaveNote());
  };


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ mb: 2, maxWidth: 1250, padding: 3 }}>

        <Grid item >
          <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>

        <Grid item >
          <Button 
          onClick={onSaveNote}
          color='primary' 
          sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>

        <Grid container>
          <TextField
            type='text'
            variant='filled'
            fullWidth
            placeholder='Ingrese un título'
            label='Titulo'
            sx={{ border: 'none', mb: 1, width: '100%', mt: 2 }}
            name='title'
            value={title}
            onChange={onInputChange} />
          <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder='¿Que sucedió hoy?'
            name='body'
            minRows={6}
            sx={{ width: '100%' }}
            value={body}
            onChange={onInputChange} />
        </Grid>
        <ImageGallery />
        {/* Galeria de Imagenes */}
      </Grid>
    </Box>

  )
};
