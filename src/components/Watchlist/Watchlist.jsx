import MovieCard from '../Body/MovieCard';

function Watchlist({watchlist, search, genre, rating, removeFromWatchlist}) {
    if (!watchlist || watchlist.length === 0) {
        return (
            <div className='flex mt-40 justify-center'>
                <h2 className='text-5xl tracking-wide animate-pulse font-semibold'>
                    No movies added to Watchlist
                </h2>
            </div>
        );
    }

    const filteredWatchlist = watchlist
        .filter((m) => m.title.toLowerCase().includes(search.toLowerCase()))
        .filter((m) => !genre || m.genre === genre)
        .filter((m) => {
            if (rating === '>=5') return Number(m.rating) >= 5;
            if (rating === '<5') return Number(m.rating) < 5;
            return true;
        });

    return (
        <div className='p-30'>
            <div className='grid grid-cols-4 gap-6'>
                {filteredWatchlist.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        watchlist={watchlist}
                        removeFromWatchlist={removeFromWatchlist}
                    />
                ))}
            </div>
        </div>
    );
}

export default Watchlist;
