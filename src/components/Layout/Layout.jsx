import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';

function Layout(props) {
    return (
        <>
            <Header
                onSearchChange={props.onSearchChange}
                onGenreChange={props.onGenreChange}
                onRatingChange={props.onRatingChange}
                genre={props.genre}
                rating={props.rating}
            />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
