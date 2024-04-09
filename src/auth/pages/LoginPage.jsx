
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";


import { checkingAuthentication, googleSingIn } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';


export const LoginPage = () => {

    const dispatch = useDispatch()

    const { email, password, onInputChange } = useForm({
        email: 'cristobalbravon@gmail.com',
        password: 'cris123'
    });

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(checkingAuthentication({ email, password }));
    };

    const onGoogleSingIn = (e) => {
        console.log('Google Sing In');
        dispatch(googleSingIn());
    };

    return (
        <>
            <AuthLayout title='Login 👋'>
                <form onClick={onSubmit}>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }} >
                            <TextField
                                name='email'
                                onChange={onInputChange}
                                value={email}
                                label='Correo'
                                type='email'
                                placeholder='correo@gmail.com'
                                fullWidth
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
                        <Grid
                            container
                            spacing={2}
                            sx={{ mt: 1, mb: 2 }} >
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'>
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
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
