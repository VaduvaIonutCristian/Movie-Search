import MovieList from './MovieList';

function Body({filtered, watchlist, removeFromWatchlist, addToWatchlist}) {
    return (
        <div className='p-30'>
            <MovieList
                filtered={filtered}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
            />
        </div>
    );
}

export default Body;
