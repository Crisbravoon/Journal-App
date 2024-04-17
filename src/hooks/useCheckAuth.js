
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";

import { logOut, login } from "../store/auth";


export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    //Revisa si la persona esta autenticada y mantendrá la info.
    useEffect(() => {
        //Firebase nos ayuda saber si esta autenticado.
        onAuthStateChanged(FirebaseAuth, async (user) => {
            //No existe usuario?, ejecuta la acción logOut.
            if (!user) return dispatch(logOut());
            // Si existe Usuario?, ejecuta la acción login.
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
        })
    }, []);
    
    return { status };
};
