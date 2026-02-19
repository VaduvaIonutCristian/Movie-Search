import './App.css';
import Body from './components/Body/Body';
import Layout from './components/Layout/Layout';
import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import movies from './data/movies.json';
import Watchlist from './components/Watchlist/Watchlist';
import MovieDetail from './components/MovieDetail/MovieDetail';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';
import {Routes, Route} from 'react-router-dom';

function App() {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState(null);
    const [rating, setRating] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem('watchlist');
        return stored ? JSON.parse(stored) : [];
    });

    const [allMovies] = useState(movies);
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    useEffect(() => {
        const s = searchParams.get('search') || '';
        if (s !== search) setSearch(s);

        const g = searchParams.get('genre') || null;
        if (g !== genre) setGenre(g);

        const r = searchParams.get('rating') || null;
        if (r !== rating) setRating(r);

        const p = parseInt(searchParams.get('page') || '1', 10);
        if (p !== currentPage) setCurrentPage(p);
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

    let filtered = allMovies
        .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
        .filter((m) => !genre || m.genre === genre)
        .filter((m) => {
            if (rating === '>=5') return Number(m.rating) >= 5;
            if (rating === '<5') return Number(m.rating) < 5;
            return true;
        });

    if (rating === '0-10') {
        filtered = filtered.sort((a, b) => Number(a.rating) - Number(b.rating));
    } else if (rating === '10-0') {
        filtered = filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [search, genre, rating]);

    const addToWatchlist = (movie) => {
        console.log('ADDING:', movie);
        setWatchlist((prev) =>
            prev.some((m) => m.id === movie.id) ? prev : [...prev, movie],
        );
    };

    const removeFromWatchlist = (movie) => {
        setWatchlist((prev) => prev.filter((m) => m.id !== movie.id));
    };

    return (
        <>
            {selectedMovie && (
                <MovieDetail
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                    addToWatchlist={addToWatchlist}
                    removeFromWatchlist={removeFromWatchlist}
                    watchlist={watchlist}
                />
            )}

            <Routes>
                <Route
                    path='/'
                    element={
                        <Layout
                            onSearchChange={setSearch}
                            onGenreChange={setGenre}
                            onRatingChange={setRating}
                            genre={genre}
                            rating={rating}
                        />
                    }
                >
                    <Route
                        index
                        element={
                            <Body
                                filtered={filtered}
                                addToWatchlist={addToWatchlist}
                                removeFromWatchlist={removeFromWatchlist}
                                watchlist={watchlist}
                                cardGenre={setGenre}
                                onMovieClick={setSelectedMovie}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                            />
                        }
                    />

                    <Route
                        path='watchlist'
                        element={
                            <Watchlist
                                search={search}
                                genre={genre}
                                rating={rating}
                                filtered={filtered}
                                watchlist={watchlist}
                                removeFromWatchlist={removeFromWatchlist}
                                onMovieClick={setSelectedMovie}
                            />
                        }
                    />

                    <Route
                        path='movies/:id'
                        element={
                            <MovieDetailPage
                                addToWatchlist={addToWatchlist}
                                removeFromWatchlist={removeFromWatchlist}
                                watchlist={watchlist}
                            />
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
