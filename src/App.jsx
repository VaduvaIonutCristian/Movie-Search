import './App.css';
import Body from './components/Body/Body';
import Layout from './components/Layout/Layout';
import {useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';
import Watchlist from './components/Watchlist/Watchlist';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';
import {Routes, Route} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setSearch, setGenre, setRating} from './store/filtersSlice';
import {setCurrentPage, resetPage} from './store/paginationSlice';

function App() {
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const pagination = useSelector((state) => state.pagination);
    const modal = useSelector((state) => state.modal);
    const {search, genre, rating} = filters;
    const {currentPage} = pagination;
    const {selectedMovie} = modal;

    useEffect(() => {
        const s = searchParams.get('search') || '';
        if (s !== search) dispatch(setSearch(s));

        const g = searchParams.get('genre') || null;
        if (g !== genre) dispatch(setGenre(g));

        const r = searchParams.get('rating') || null;
        if (r !== rating) dispatch(setRating(r));

        const p = parseInt(searchParams.get('page') || '1', 10);
        if (p !== currentPage) dispatch(setCurrentPage(p));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (genre) params.set('genre', genre);
        if (rating) params.set('rating', rating);
        if (currentPage > 1) params.set('page', String(currentPage));

        const cur = searchParams.toString();
        const next = params.toString();
        if (cur !== next) setSearchParams(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, genre, rating, currentPage]);

    useEffect(() => {
        dispatch(resetPage());
    }, [search, genre, rating, dispatch]);

    return (
        <>
            {selectedMovie && <MovieDetail />}

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Body />} />

                    <Route path='watchlist' element={<Watchlist />} />

                    <Route path='movies/:id' element={<MovieDetailPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
