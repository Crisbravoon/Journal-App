
import { LoginUserWithEmail, logOutFireBase, registerUserWithEmail, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logOut, login } from "./";

//Tareas async y Acciones que puedo despachar (dispatch);

export const checkingAuthentication = () => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSingIn = () => {

    return async (dispatch) => {

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


export const startCreatingUserWithEmail = ({ email, password, displayName }) => {

    return async (dispatch) => {

        //Realiza la acción de validación de autenticación.
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmail({ email, password, displayName });

        //Si no esta ok o falla
        if (!ok) return dispatch(logOut({ errorMessage }));

        //Si sale bien, lo logaremos
        dispatch(login({ uid, email, displayName, photoURL }));
    };
};


export const startLoginWithEmail = ({ email, password }) => {

    return async (dispatch) => {

        //Realiza la acción de validación de autenticación.
        dispatch(checkingCredentials());

        const resp = await LoginUserWithEmail({ email, password });

        if (!resp.ok) return dispatch(logOut(resp));

        dispatch(login(resp));

    }
};

export const startLogOut = () => {
    return async (dispatch) => {

        await logOutFireBase();
        dispatch(logOut());
    };
}