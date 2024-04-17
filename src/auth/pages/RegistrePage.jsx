
import { Grid, TextField, Button, Link, Typography, Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import React, { useMemo } from 'react';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmail } from '../../store/auth';

//Valores por defecto que tenga.
const formData = {
  password: '',
  email: '',
  displayName: ''
};

//Objeto para validaciones de campos de formulario.
const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @.'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El Nombre es obligatorio.'],
};

export const RegistrePage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  //Utilizamos un hook personalizado para el formulario
  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmail(formState));
  };

  return (
    <>
      <AuthLayout title='Registro de Cuenta ✍'>
        <form 
        className='animate__animated animate__fadeIn animated__faster'
        onSubmit={onSubmitForm}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }} >
              <TextField
                label='Nombre Completo'
                type='text'
                placeholder='Pepito Perez'
                fullWidth
                name="displayName"
                onChange={onInputChange}
                value={displayName}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Correo'
                type='email'
                placeholder='correo@gmail.com'
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Contraseña'
                type='password'
                placeholder='************'
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ mt: 1, mb: 2 }} >

              <Grid
                item
                xs={12}
                display={ !!errorMessage ? '' : 'none' }>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
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

              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
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
