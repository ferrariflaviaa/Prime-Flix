import "./syled.css"
import {Link} from 'react-router-dom'
function Header (){
    return(
        <header>
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="favoritos" to="/favorite">Meus filmes favoritos</Link>
        </header>
    )
}

export default Header;