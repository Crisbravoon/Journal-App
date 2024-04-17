
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { startGoogleSingIn, startLoginWithEmail } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';


export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmail({ email, password }));
    };

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onGoogleSingIn = (e) => {
        dispatch(startGoogleSingIn());
    };

    return (
        <>
            <AuthLayout title='Login 👋'>
                <form
                    className='animate__animated animate__fadeIn animated__faster'
                    onSubmit={onSubmit}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }} >
                            <TextField
                                name='email'
                                onChange={onInputChange}
                                value={email}
                                placeholder='correo@gmail.com'
                                fullWidth
                                label='Correo'
                                type='email'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                name='password'
                                label='Contraseña'
                                onChange={onInputChange}
                                value={password}
                                type='password'
                                placeholder='******'
                                fullWidth
                            />
                        </Grid>

                        <Grid container
                            sx={{ mt: 2 }}
                            display={!!errorMessage ? '' : 'none'}>
                            <Grid item xs={12}>
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>
                        </Grid>

                        <Grid
                            container spacing={2} sx={{ mt: 1, mb: 2 }} >
                            <Grid item xs={12} sm={6}>
                                <Button
                                    disabled={isAuthenticating}
                                    type="submit"
                                    fullWidth
                                    variant="contained">
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    disabled={isAuthenticating}
                                    fullWidth
                                    variant='contained'
                                    onClick={onGoogleSingIn}>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction='row'
                            justifyContent='end'>

                            <Link
                                component={RouterLink}
                                color='inherit'
                                to='/auth/register'>
                                Crear cuenta 🤩
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
        </>
    )
};
