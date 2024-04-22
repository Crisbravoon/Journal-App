
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

import { addNewNote, createNewNote, setActiveNote, setNotes, setSaved, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

// Dispatch (Acciones) para crear una nueva nota
export const startNewNote = () => {
    //Grabar en firebase por usuario.
    return async (dispatch, getState) => {
        //Controlar la acción de agregar notas
        dispatch(createNewNote());

        //Crear la nota
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        //Agregar la nueva nota a la base de datos
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        // Envia al Firebase a agregar los datos.
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        //Agregar la nota
        dispatch(addNewNote(newNote));

        //Activar la nota
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!uid) throw new Error('El usuario no existe');
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes));
    }
};

export const startSaveNote = () => {

    return async (dispatch, getState) => {

        dispatch(setSaved());

        const { uid } = getState().auth;
        const { active } = getState().journal;

        //Eliminamos el id
        const noteToFireStore = { ...active };
        delete noteToFireStore.id;

        //Señalamos la ruta en donde tiene que guardar.
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);

        // merge: mantiene los datos y actualiza 
        await setDoc(docRef, noteToFireStore, { merge: true });

        dispatch(updateNote(active));
    }
};