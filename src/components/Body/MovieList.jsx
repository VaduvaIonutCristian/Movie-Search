import MovieCard from './MovieCard';
import Paginate from './Paginate';

function MovieList({
    filtered,
    addToWatchlist,
    removeFromWatchlist,
    watchlist,
    cardGenre,
    onMovieClick,
    currentPage,
    onPageChange,
}) {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMovies = filtered.slice(startIndex, endIndex);

    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:grid-cols-5 '>
                {paginatedMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        addToWatchlist={addToWatchlist}
                        removeFromWatchlist={removeFromWatchlist}
                        watchlist={watchlist}
                        cardGenre={cardGenre}
                        onMovieClick={onMovieClick}
                    />
                ))}
            </div>
            <Paginate
                items={filtered.length}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </>
    );
}

export default MovieList;
