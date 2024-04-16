
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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