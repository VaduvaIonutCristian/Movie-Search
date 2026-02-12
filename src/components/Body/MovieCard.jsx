function MovieCard({movie, addToWatchlist, removeFromWatchlist, watchlist}) {
    let ratingColor = 'bg-gray-600';

    if (movie.rating >= 8) {
        ratingColor = 'bg-green-600';
    } else if (movie.rating >= 5) {
        ratingColor = 'bg-yellow-600';
    } else {
        ratingColor = 'bg-red-600';
    }

    const isSaved = watchlist.some((m) => m.id === movie.id);

    return (
        <div className=' flex flex-col items-center border-5 rounded-lg bg-teal-800'>
            <img src={`/images/${movie.image}`} className='' />

            <div className='flex flex-col p-4 gap-2 items-center'>
                <h3 className=' text-center text-xl tracking-widest font-semibold'>
                    <strong>{movie.title}</strong>
                </h3>
                <div className='flex flex-row gap-2'>
                    <h3 className='bg-gray-900 rounded-md px-2 text-white hover:bg-orange-400'>
                        {movie.genre}
                    </h3>

                    <h4
                        className={`${ratingColor} bg-gray-900 rounded-md pr-1 pl-1 text-white`}
                    >
                        {movie.rating}
                    </h4>
                    {isSaved ? (
                        <button
                            onClick={() => removeFromWatchlist(movie)}
                            className='bg-red-600 hover:bg-red-700 rounded-md px-2 text-white'
                        >
                            <i class='fa-solid fa-heart-circle-xmark'></i>
                        </button>
                    ) : (
                        <button
                            onClick={() => addToWatchlist(movie)}
                            className='bg-gray-900 rounded-md px-2 text-white hover:bg-orange-400'
                        >
                            <i class='fa-solid fa-heart-circle-plus'></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
