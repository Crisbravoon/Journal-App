
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false, //Saber si guarda la nota.
        messageSaved: '',
        notes: [],
        active: null,
        // activeNotes: {
        //     id: 'ABC123', //ID entrega el Firebase
        //     title: '', 
        //     body: '',
        //     date: 123123,
        //     imageUrl :[]
        // },
    },
    reducers: {
        createNewNote: (state) => {
            state.isSaving = true;
        },
        addNewNote: (state, action) => {
            //Agregamos la nota.
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            //Activar nota
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            //Agregamos las notas.
            state.notes = action.payload;
            state.messageSaved = '';
        },
        setSaved: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                //Valida la nota por el ID.
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            })
            state.messageSaved = `Se actualizo la Nota: ${action.payload.title}`;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            //Filtra para quitar cuya nota tenga el id sea en la acción de payload
            state.notes = state.notes.filter(note => note.id !== action.payload);

        },
        setPhotosToActiveNotes: (state, action) => {
            state.isSaving = false;
            //En arreglo quedan las fotos antiguas y las nuevas.
            state.active.imageUrl = [...state.active.imageUrl, ...action.payload];
        }
    }
});

export const {
    createNewNote,
    addNewNote,
    setActiveNote,
    setNotes,
    setSaved,
    updateNote,
    setPhotosToActiveNotes,
    deleteNoteById } = journalSlice.actions;