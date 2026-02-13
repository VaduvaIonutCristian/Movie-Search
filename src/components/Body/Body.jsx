import MovieList from './MovieList';

function Body({filtered, watchlist, removeFromWatchlist, addToWatchlist}) {
    return (
        <div className='px-20 py-5 '>
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
