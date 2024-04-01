import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <>
            <AuthLayout title='Login 👋'>
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }} >
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
                                    fullWidth
                                    variant='contained'>
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    variant='contained'>
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
