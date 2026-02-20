import {createSlice} from '@reduxjs/toolkit';

const load = () => {
    try {
        const s = localStorage.getItem('watchlist');
        return s ? JSON.parse(s) : [];
    } catch (e) {
        console.error('Failed to load watchlist from storage', e);
        return [];
    }
};

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: load(),
    reducers: {
        add(state, action) {
            const movie = action.payload;
            if (!state.some((m) => m.id === movie.id)) {
                state.push(movie);
            }
        },
        remove(state, action) {
            const id = action.payload;
            return state.filter((m) => m.id !== id);
        },
    },
});

export const {add, remove} = watchlistSlice.actions;
export default watchlistSlice.reducer;
