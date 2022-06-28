import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar