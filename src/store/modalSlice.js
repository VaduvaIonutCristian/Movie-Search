import {createSlice} from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        selectedMovie: null,
    },
    reducers: {
        setSelectedMovie(state, action) {
            state.selectedMovie = action.payload;
        },
        clearSelectedMovie(state) {
            state.selectedMovie = null;
        },
    },
});

export const {setSelectedMovie, clearSelectedMovie} = modalSlice.actions;
export default modalSlice.reducer;
