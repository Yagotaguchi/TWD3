import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header(){

    const titulo = "The Walking Dead"

    return(
        <>
            <header>
                <a href="#">
                    <img src={logo} alt={titulo} />
                </a>
                <nav>
                <ul>
                    <Link to = "/home"><li><a>Home</a></li></Link>
                    <Link to = "/historia"><li><a>História</a></li></Link>
                    <Link to = "/episodios" ><li><a>Episódios</a></li></Link>
                    <Link to = "/serie"><li><a>Série Quadrinhos</a></li></Link>
                    <Link to = "/contatos" ><li><a>Contatos</a></li></Link>
                </ul>
                </nav>
            </header>  
        </>
    )
}