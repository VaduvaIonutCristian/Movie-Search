import MovieCard from '../Body/MovieCard';
import {useSelector} from 'react-redux';
import {filterAndSortMovies} from '../../store/selectors';

function Watchlist() {
    const watchlist = useSelector((state) => state.watchlist);
    const filters = useSelector((state) => state.filters);

    if (!watchlist || watchlist.length === 0) {
        return (
            <div className='flex mt-20 sm:mt-40 justify-center px-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide animate-pulse font-semibold text-center'>
                    No movies added to Watchlist
                </h2>
            </div>
        );
    }

    const filteredWatchlist = filterAndSortMovies(watchlist, filters);

    return (
        <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-8'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6'>
                {filteredWatchlist.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Watchlist;
