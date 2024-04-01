import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid, TextField, Button, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';


export const RegistrePage = () => {
  return (
    <>
      <AuthLayout title='Registro de Cuenta ✍'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField
                label='Nombre'
                type='text'
                placeholder='Pepito Perez'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@gmail.com'
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='************'
                fullWidth
              />
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ mt: 1, mb: 2 }} >
              <Grid item xs={12} sm={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  fullWidth
                  variant='contained'>
                  Crear Cuenta 🎉
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction='row'
              justifyContent='end'>

              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link
                component={RouterLink}
                color='inherit'
                to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
