import MovieCard from './MovieCard';
import Body from './Body';

function MovieList({filtered, addToWatchlist, removeFromWatchlist, watchlist}) {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {filtered.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    addToWatchlist={addToWatchlist}
                    removeFromWatchlist={removeFromWatchlist}
                    watchlist={watchlist}
                />
            ))}
        </div>
    );
}
export default MovieList;
