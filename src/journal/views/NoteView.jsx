
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';

import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material';

import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';

import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks';
import { setActiveNote } from '../../store/journal/journalSlice';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active, messageSaved, isSaving } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(active);

  const fileInputRef = useRef();

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Modificado!", messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {

    if (target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDeleteNote = () => {
    dispatch(startDeletingNote(startDeletingNote))
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
          <input
            type='file'
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />

          <IconButton
            color='primary'
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadFileOutlined />
          </IconButton>

          <Button
            disabled={isSaving}
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
        <Grid container justifyContent='end'>
          <Button
            onClick={onDeleteNote}
            sx={{ mt: 2 }}>
            <DeleteOutline />
            Borrar
          </Button>
        </Grid>
        <ImageGallery
          images={active.imageUrl}
        />

      </Grid>
    </Box>

  )
};
