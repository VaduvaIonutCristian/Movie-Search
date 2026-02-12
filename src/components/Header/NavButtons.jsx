import {Link} from 'react-router-dom';

function NavButtons() {
    return (
        <div className='flex flex-row justify-center gap-3'>
            <div>
                <Link to='/'>
                    <button className='px-4 py-2 rounded-md bg-orange-300 border-2  border-orange-700 text-orange-800 hover:bg-orange-400'>
                        <strong>Home</strong>
                    </button>
                </Link>
            </div>
            <div>
                <Link to='/watchlist'>
                    <button className='px-4 py-2 rounded-md bg-orange-300 border-2  border-orange-700 text-orange-800  hover:bg-orange-400'>
                        <strong>Watchlist</strong>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NavButtons;
