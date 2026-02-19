function MovieCard({
    movie,
    addToWatchlist,
    removeFromWatchlist,
    watchlist,
    cardGenre,
    onMovieClick,
}) {
    let ratingColor = 'bg-gray-600';

    if (movie.rating >= 8) {
        ratingColor = 'bg-green-600';
    } else if (movie.rating >= 5) {
        ratingColor = 'bg-yellow-600';
    } else {
        ratingColor = 'bg-red-600';
    }

    const isSaved = watchlist.some((m) => m.id === movie.id);

    const handleCardClick = () => {
        if (onMovieClick) {
            onMovieClick(movie);
        }
    };

    return (
        <div className='flex flex-col items-center max-w-lg border-4 rounded-xl bg-teal-800 h-full hover:shadow-lg hover:shadow-orange-500 transition cursor-pointer'>
            <div onClick={handleCardClick} className='w-full cursor-pointer'>
                <img
                    src={`/images/${movie.image}`}
                    className='w-full h-auto object-cover rounded-t-lg'
                />

                <div className='flex flex-col p-2 sm:p-3 md:p-4 border-t-4 border-blackgap-2 items-center w-full'>
                    <h3 className='text-center text-sm sm:text-base md:text-lg lg:text-xl tracking-widest font-semibold line-clamp-2 hover:text-orange-300 transition'>
                        <strong>{movie.title}</strong>
                    </h3>
                </div>
            </div>

            <div className='flex flex-row gap-1 sm:gap-2 flex-wrap justify-center px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4 w-full'>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        cardGenre(movie.genre);
                    }}
                    className='bg-gray-900 rounded-md px-1 sm:px-2 py-1 text-white text-xs sm:text-sm hover:bg-orange-400 transition'
                >
                    {movie.genre}
                </button>

                <div
                    className={`${ratingColor} bg-gray-900 rounded-md px-1 sm:px-2 py-1 text-white text-xs sm:text-sm`}
                >
                    {movie.rating}
                </div>
                {isSaved ? (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            removeFromWatchlist(movie);
                        }}
                        className='bg-red-600 hover:bg-red-700 rounded-md px-1 sm:px-2 py-1 text-white text-xs sm:text-sm transition'
                    >
                        <i className='fa-solid fa-heart-circle-xmark'></i>
                    </button>
                ) : (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToWatchlist(movie);
                        }}
                        className='bg-gray-900 rounded-md px-1 sm:px-2 py-1 text-white text-xs sm:text-sm hover:bg-orange-400 transition'
                    >
                        <i className='fa-solid fa-heart-circle-plus'></i>
                    </button>
                )}
            </div>
        </div>
    );
}

export default MovieCard;
