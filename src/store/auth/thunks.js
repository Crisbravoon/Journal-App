
import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logOut, login } from "./";

//Acciones que puedo despachar (dispatch);

export const checkingAuthentication = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCredentials(email, password));
    };
};

export const startGoogleSingIn = () => {

    return async(dispatch) => {

        //Realiza la acción de validación de autenticación.
        dispatch(checkingCredentials());

        //Obtengo los datos del usuario de google.
        const result = await singInWithGoogle();

        //Valido que el usuario se haya autenticado correctamente.
        if (!result.ok) return dispatch(logOut(result.errorMessage));

        //Realiza la acción de ingresar al login.
        dispatch(login(result));
    };
};

