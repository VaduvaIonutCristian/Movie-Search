import {Link} from 'react-router-dom';

function NavButtons() {
    return (
        <div className='flex flex-row justify-end gap-3'>
            <a className='px-4 py-2 rounded-md bg-teal-300 border-2 inline-block border-teal-700 text-teal-800 hover:bg-teal-400 hover:cursor-pointer'>
                <Link to='/'>
                    <strong>Home</strong>
                </Link>
            </a>
            <a className='px-4 py-2 rounded-md bg-teal-300 border-2 inline-block border-teal-700 text-teal-800  hover:bg-teal-400 hover:cursor-pointer'>
                <Link to='/watchlist'>
                    <strong>Watchlist</strong>
                </Link>
            </a>
        </div>
    );
}

export default NavButtons;
