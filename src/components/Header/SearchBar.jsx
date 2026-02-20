import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setSearch} from '../../store/filtersSlice';

function SearchBar() {
    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        dispatch(setSearch(value));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='border rounded-md w-full sm:w-80 md:w-96'>
            <form onSubmit={handleSubmit} className='flex items-center'>
                <input
                    type='text'
                    placeholder='Search movies...'
                    className='flex-1 min-w-0 px-2 sm:px-3 py-2 text-teal-800 tracking-widest text-sm sm:text-base'
                    value={query}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='flex-none p-1 sm:p-2 border-l-3 border-l-teal-500 hover:bg-teal-50 transition'
                >
                    <i className='fa-solid fa-magnifying-glass text-sm sm:text-base'></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
