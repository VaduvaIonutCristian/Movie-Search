import {useNavigate} from 'react-router-dom';

function MovieDetail({
    movie,
    onClose,
    addToWatchlist,
    removeFromWatchlist,
    watchlist,
}) {
    const navigate = useNavigate();

    if (!movie) return null;

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
        <div className='fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4'>
            <div className='bg-teal-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col'>
                <div className='flex justify-end p-4'>
                    <button
                        onClick={onClose}
                        className='text-white hover:bg-teal-700 p-2 rounded-md transition'
                    >
                        <i className='fa-solid fa-times text-xl'></i>
                    </button>
                </div>

                <div className='px-4'>
                    <img
                        src={`/images/${movie.image}`}
                        alt={movie.title}
                        className='w-full h-auto rounded-lg object-cover'
                    />
                </div>

                <div className='p-4 md:p-6 flex flex-col gap-4 text-white'>
                    <div>
                        <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                            {movie.title}
                        </h1>
                    </div>

                    <div className='flex flex-wrap gap-3 items-center'>
                        <span className='bg-orange-600 px-3 py-1 rounded-md text-sm md:text-base'>
                            <strong>{movie.genre}</strong>
                        </span>
                        <span
                            className={`${ratingColor} px-3 py-1 rounded-md text-sm md:text-base font-bold`}
                        >
                            Rating: {movie.rating}/10
                        </span>
                        <span className='bg-gray-700 px-3 py-1 rounded-md text-sm md:text-base'>
                            {movie.year}
                        </span>
                    </div>

                    <div>
                        <h3 className='text-lg md:text-xl font-semibold mb-1'>
                            Director
                        </h3>
                        <p className='text-gray-200 text-sm md:text-base'>
                            {movie.director}
                        </p>
                    </div>

                    <div>
                        <h3 className='text-lg md:text-xl font-semibold mb-2'>
                            About
                        </h3>
                        <p className='text-gray-200 text-sm md:text-base leading-relaxed'>
                            {movie.description}
                        </p>
                    </div>

                    <div className='flex gap-3 mt-4 flex-col'>
                        <div className='flex gap-3'>
                            {isSaved ? (
                                <button
                                    onClick={() => removeFromWatchlist(movie)}
                                    className='flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition flex items-center justify-center gap-2'
                                >
                                    <i className='fa-solid fa-heart-circle-xmark'></i>
                                    Remove from Watchlist
                                </button>
                            ) : (
                                <button
                                    onClick={() => addToWatchlist(movie)}
                                    className='flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md font-semibold transition flex items-center justify-center gap-2'
                                >
                                    <i className='fa-solid fa-heart-circle-plus'></i>
                                    Add to Watchlist
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className='flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-md font-semibold transition'
                            >
                                Close
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                navigate(`/movies/${movie.id}`);
                                onClose();
                            }}
                            className='w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold transition flex items-center justify-center gap-2'
                        >
                            <i className='fa-solid fa-expand'></i>
                            View Full Page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
