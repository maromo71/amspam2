import { Link } from 'react-router-dom'
import './style.css'

export default function NavBar(){
    return(
        <nav>
            <Link to="/">Início</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    )
}