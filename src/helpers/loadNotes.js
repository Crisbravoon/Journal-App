
import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadNotes = async (uid = '') => {

    if (!uid) throw new Error('El usuario no existe');

    //Treamos los collections de Firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

    //Treamos los document de esos collections
    const docs = await getDocs(collectionRef);

    const notes = [];

    //Recorremos cada uno de los documentos y la guardamos en otro arreglo de notes
    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    return notes;
};