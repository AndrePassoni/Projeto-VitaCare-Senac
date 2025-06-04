import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './index.css'

function Header() {
   return (
    <>
        <header className="header">
        <img src={logo} alt="VitaCare Logo" className="logo" />
        <nav className="navbar">
          <Link className="nav-button" to="/">Home</Link>
          <Link className="nav-button" to="/servicos">Serviços</Link>
          <Link className="nav-button" to="/equipe">Equipe</Link>
          <Link className="nav-button" to="/depoimentos">Depoimentos</Link>
          <Link className="nav-button" to="/contato">Contato</Link>
          <Link className="nav-button" to="/blog">Notícias</Link>
          <Link className="nav-button" to="/sobre">Sobre</Link>
        </nav>
      </header>
    </>
     
    );
}

export default Header;
