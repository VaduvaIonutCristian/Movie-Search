import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import {useEffect, useState} from 'react';
import movies from './data/movies.json';
import Watchlist from './components/Watchlist/Watchlist';
import {Routes, Route} from 'react-router-dom';

function App() {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState(null);
    const [rating, setRating] = useState(null);
    const [watchlist, setWatchlist] = useState(() => {
        const stored = localStorage.getItem('watchlist');
        return stored ? JSON.parse(stored) : [];
    });

    const [allMovies] = useState(movies);
    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

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
            <Header
                onSearchChange={setSearch}
                onGenreChange={setGenre}
                onRatingChange={setRating}
            />

            <Routes>
                <Route
                    path='/'
                    element={
                        <Body
                            filtered={filtered}
                            addToWatchlist={addToWatchlist}
                            removeFromWatchlist={removeFromWatchlist}
                            watchlist={watchlist}
                        />
                    }
                />

                <Route
                    path='/watchlist'
                    element={
                        <Watchlist
                            search={search}
                            genre={genre}
                            rating={rating}
                            filtered={filtered}
                            watchlist={watchlist}
                            removeFromWatchlist={removeFromWatchlist}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
