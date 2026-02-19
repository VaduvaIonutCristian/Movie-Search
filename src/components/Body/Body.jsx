import MovieList from './MovieList';

function Body({
    filtered,
    watchlist,
    removeFromWatchlist,
    addToWatchlist,
    cardGenre,
    onMovieClick,
    currentPage,
    onPageChange,
}) {
    return (
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-5'>
            <MovieList
                filtered={filtered}
                addToWatchlist={addToWatchlist}
                removeFromWatchlist={removeFromWatchlist}
                watchlist={watchlist}
                cardGenre={cardGenre}
                onMovieClick={onMovieClick}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default Body;
