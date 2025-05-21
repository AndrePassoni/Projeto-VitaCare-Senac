import {  Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./index.css"

export default function Blog() {
  return (
    <>
        <div className="header">
        <img src={logo} alt='VitaCare Logo'></img>

        <div className='buttons_pages'>
                <div className='buttons'>
                    <Link className='button' to="/">Home</Link>
                    <Link className='button' to="/servicos">Serviços</Link>
                    <Link className='button' to="/equipe">Equipe</Link>
                    <Link className='button' to="/depoimentos">Depoimentos</Link>
                    <Link className='button' to="/contato">Contato</Link>
                    <Link className='button' to="/blog">Notícias</Link>
                    <Link className='button' to="/sobre">Sobre</Link>
                </div>
            </div>
        </div>
    

        
        <h2>VitaCare</h2>
        
    </>
  );
}
