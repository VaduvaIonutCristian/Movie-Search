import SearchBar from './SearchBar';
import NavBar from './NavButtons';
import FilterResult from './FilterButtons';

function Header({onSearchChange, onGenreChange, onRatingChange}) {
    return (
        <header className=''>
            <div className='flex flex-row items-center justify-between mx-20'>
                <div className=' flex-col items-center'>
                    <h1 className=' text-6xl p-4 tracking-widest font-semibold'>
                        Find your{' '}
                        <strong className='text-teal-600 '>Movies</strong>
                    </h1>
                    <SearchBar onSearch={onSearchChange} />
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <NavBar />
                    <div className=''>
                        <FilterResult
                            onGenreChange={onGenreChange}
                            onRatingChange={onRatingChange}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
