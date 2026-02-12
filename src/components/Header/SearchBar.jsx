import {useState} from 'react';

function SearchBar({onSearch}) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='border rounded-md'>
            <form onSubmit={handleSubmit} className='flex items-center'>
                <input
                    type='text'
                    placeholder='Search movies...'
                    className='flex-1 px-3 py-2 text-teal-800 animate-pulse tracking-widest w-100'
                    value={query}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='flex-none p-1  border-l-3 border-l-teal-500'
                >
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
