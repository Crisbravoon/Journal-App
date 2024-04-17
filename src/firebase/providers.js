
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);

        //Obtengo el usuario y lo que quiero
        const { email, displayName, photoURL, uid } = result.user;

        return {
            ok: true,
            email,
            displayName,
            photoURL,
            uid
        }

    } catch (error) {

        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
};

//Registramos el usuario en FireBase.
export const registerUserWithEmail = async ({ email, password, displayName }) => {

    try {
        //LLegando a FireBase para registrar al usuario 
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password, displayName);
        //Si sale bien, traeremos los siguiente datos.
        const { uid, photoURL } = resp.user;
        //Actualizamos el DisplayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    } catch (error) {

        return { ok: false, errorMessage: 'Correo Existente' }
    }
};


//Logeando usuario a la pagina
export const LoginUserWithEmail = async ({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: 'Usuario no registrado' }
    }
};

//Cerrando sesión 
export const logOutFireBase = async () => {
    return await FirebaseAuth.signOut();
};