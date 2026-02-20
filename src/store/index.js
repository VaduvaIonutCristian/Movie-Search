import {configureStore} from '@reduxjs/toolkit';
import watchlistReducer from './watchlistSlice';
import filtersReducer from './filtersSlice';
import paginationReducer from './paginationSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
        filters: filtersReducer,
        pagination: paginationReducer,
        modal: modalReducer,
    },
});

store.subscribe(() => {
    try {
        const state = store.getState();
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    } catch (e) {
        console.error('Failed to save watchlist', e);
    }
});
