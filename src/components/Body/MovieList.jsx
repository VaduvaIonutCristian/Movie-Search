import MovieCard from './MovieCard';
import Paginate from './Paginate';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrentPage} from '../../store/paginationSlice';
import {filterAndSortMovies} from '../../store/selectors';
import movies from '../../data/movies.json';

function MovieList() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const filtered = filterAndSortMovies(movies, filters);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMovies = filtered.slice(startIndex, endIndex);

    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 lg:grid-cols-5 '>
                {paginatedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Paginate
                items={filtered.length}
                currentPage={currentPage}
                onPageChange={(p) => dispatch(setCurrentPage(p))}
            />
        </>
    );
}

export default MovieList;
