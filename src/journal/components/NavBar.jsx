
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startLogOut } from "../../store/auth";

export const NavBar = ({ drawerWidth }) => {
    
    const dispatch = useDispatch();

    const onLogOut = () => {

        dispatch(startLogOut())
        console.log('Cerrando Sesión');
    };

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
            <Toolbar>

                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>Jornual App</Typography>
                    <IconButton 
                    color='error'
                    onClick={onLogOut}>
                        <LoginOutlined />
                    </IconButton>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
};
