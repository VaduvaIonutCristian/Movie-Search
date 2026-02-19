import {NavLink} from 'react-router-dom';

function NavButtons() {
    return (
        <div className='flex flex-row justify-center sm:justify-center md:justify-end gap-3'>
            <NavLink
                to='/'
                className={({isActive}) =>
                    `px-4 py-2 rounded-md border-2 inline-block font-bold transition ${
                        isActive
                            ? 'bg-orange-400 border-orange-600 text-orange-900'
                            : 'bg-teal-300 border-teal-700 text-teal-800 hover:bg-teal-400'
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to='/watchlist'
                className={({isActive}) =>
                    `px-4 py-2 rounded-md border-2 inline-block font-bold transition ${
                        isActive
                            ? 'bg-orange-400 border-orange-600 text-orange-900'
                            : 'bg-teal-300 border-teal-700 text-teal-800 hover:bg-teal-400'
                    }`
                }
            >
                Watchlist
            </NavLink>
        </div>
    );
}

export default NavButtons;
