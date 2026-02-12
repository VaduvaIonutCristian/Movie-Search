import SearchBar from './SearchBar';
import NavBar from './NavButtons';
import FilterResult from './FilterButtons';

function Header({onSearchChange, onGenreChange, onRatingChange}) {
    return (
        <header className='flex flex-col items-center gap-3 p-4 '>
            <h1 className=' text-6xl p-4 tracking-widest font-semibold'>
                Find your <strong className='text-teal-600 '>Movies</strong>
            </h1>
            <NavBar />
            <SearchBar onSearch={onSearchChange} />
            <FilterResult
                onGenreChange={onGenreChange}
                onRatingChange={onRatingChange}
            />
        </header>
    );
}

export default Header;
