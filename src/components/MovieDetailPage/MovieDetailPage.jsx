import {useParams, useNavigate} from 'react-router-dom';
import {useMemo} from 'react';
import movies from '../../data/movies.json';

function MovieDetailPage({addToWatchlist, removeFromWatchlist, watchlist}) {
    const {id} = useParams();
    const navigate = useNavigate();

    const movie = useMemo(() => {
        return movies.find((m) => m.id === Number(id));
    }, [id]);

    if (!movie) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen px-4'>
                <h1 className='text-4xl font-bold text-white mb-4'>
                    Movie Not Found
                </h1>
                <p className='text-xl text-gray-300 mb-6'>
                    The movie you're looking for doesn't exist.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className='bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition'
                >
                    Back to Movies
                </button>
            </div>
        );
    }

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
        <div className='bg-gradient-to-b from-teal-900 to-gray-900 min-h-screen py-8 px-4 sm:px-8 md:px-12 lg:px-20'>
            <button
                onClick={() => navigate('/')}
                className='mb-6 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition flex items-center gap-2'
            >
                <i className='fa-solid fa-arrow-left'></i>
                Back to Movies
            </button>

            <div className='max-w-4xl mx-auto bg-teal-800 rounded-lg overflow-hidden shadow-2xl'>
                <div className='h-96 sm:h-[500px] overflow-hidden'>
                    <img
                        src={`/images/${movie.image}`}
                        alt={movie.title}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='p-6 sm:p-8 md:p-10 flex flex-col gap-6 text-white'>
                    <div>
                        <h1 className='text-4xl sm:text-5xl font-bold mb-2'>
                            {movie.title}
                        </h1>
                    </div>

                    <div className='flex flex-wrap gap-3 items-center'>
                        <span className='bg-orange-600 px-4 py-2 rounded-md text-base font-semibold'>
                            {movie.genre}
                        </span>
                        <span
                            className={`${ratingColor} px-4 py-2 rounded-md text-base font-bold`}
                        >
                            Rating: {movie.rating}/10
                        </span>
                        <span className='bg-gray-700 px-4 py-2 rounded-md text-base'>
                            {movie.year}
                        </span>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>
                            Director
                        </h3>
                        <p className='text-gray-200 text-lg'>
                            {movie.director}
                        </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-3'>About</h3>
                        <p className='text-gray-200 text-lg leading-relaxed'>
                            {movie.description}
                        </p>
                    </div>

                    <div className='flex gap-3 mt-6 flex-col sm:flex-row'>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;
