
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
        },
        setSaved: (state) => {
            state.isSaving = true;
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
        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const {
    createNewNote,
    addNewNote,
    setActiveNote,
    setNotes,
    setSaved,
    updateNote,
    deleteNoteById } = journalSlice.actions;