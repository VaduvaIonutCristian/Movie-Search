import {createSlice} from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        genre: null,
        rating: null,
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        setGenre(state, action) {
            state.genre = action.payload;
        },
        setRating(state, action) {
            state.rating = action.payload;
        },
    },
});

export const {setSearch, setGenre, setRating} = filtersSlice.actions;
export default filtersSlice.reducer;
