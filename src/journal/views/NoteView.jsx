
import { SaveOutlined } from '@mui/icons-material';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mb: 2, maxWidth: 1250, padding: 3}}>

        <Grid item >
          <Typography fontSize={39} fontWeight='light'> 01 de Abril 2024</Typography>
        </Grid>

        <Grid item >
          <Button color='primary' sx={{ padding: 2 }}>
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
            sx={{ border: 'none', mb: 1, width: '100%', mt:2}} />
          <TextField
            type='text'
            variant='filled'
            fullWidth
            multiline
            placeholder='¿Que sucedió hoy?'
            minRows={6}
            sx={{ width: '100%' }} />
        </Grid>
        <ImageGallery />
        {/* Galeria de Imagenes */}
      </Grid>
    </Box>

  )
};
