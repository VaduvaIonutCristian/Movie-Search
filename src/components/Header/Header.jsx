import SearchBar from './SearchBar';
import NavBar from './NavButtons';
import FilterButtons from './FilterButtons';

function Header() {
    return (
        <header className='flex flex-col '>
            <div
                className='
                    flex flex-col items-center
                    md:flex-row md:justify-between
                    px-4 sm:px-8 md:px-20
                    py-6 gap-8'
            >
                <div className='flex flex-col items-center text-center md:items-start  md:text-left w-full md:w-auto'>
                    <h1 className=' txt-2xl sm:text-3xl md:text-5xl lg:text-6xl p-2 tracking-widest font-semibold'>
                        Find your{' '}
                        <strong className='text-teal-600 '>Movies</strong>
                    </h1>
                    <SearchBar />
                </div>
                <div className='flex flex-col items-center md:items-end gap-3 w-full md:w-auto'>
                    <NavBar />
                    <div className='flex flex-'>
                        <FilterButtons />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
