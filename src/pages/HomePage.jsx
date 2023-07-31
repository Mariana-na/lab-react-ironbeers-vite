import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Link to="/beers">All Beers </Link>
            <Link to="/random-beer">Random Beer </Link>
            <Link to="/new-beer">Add Beer </Link>
        </>
    )
}

export default HomePage;
