import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteData } from "../../type";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NoteData>) {
      // noteData'ya id ekleyip note'a çeviririz
      const newNote: Note = { ...action.payload, id: v4() };

      // state'e yeni notu ekleriz
      state.notes.push(newNote);
    },


    deleteNote(state, action: PayloadAction<string>) {
     const i = state.notes.findIndex((index)=>index.id ===action.payload);
      state.notes.splice(i,1);
    },

    updateNote(state, action: PayloadAction<Note>) {
      const i = state.notes.findIndex((index)=> index.id ===action.payload.id);
      state.notes.splice(i,1,action.payload);
    }
  },
});

export const { addNote ,deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
