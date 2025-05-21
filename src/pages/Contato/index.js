import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./index.css"

export default function Contato() {
  return (

    // <>
    //     <div className="header">
    //     <h1>VitaCare</h1>
    //     <img src={logo} alt='VitaCare Logo'></img>

    //     <div className='buttons_pages'>
    //           <div className='buttons'>
    //               <button className='button' href="/">Home</button>
    //               <button className='button' href="/servicos">Serviços</button>
    //               <button className='button' href="/equipe">Equipe</button>
    //               <button className='button' href="/depoimentos">Depoimentos</button>
    //               <button className='button' href="/contato">Contato</button>
    //               <button className='button' href="/sobre">Sobre</button>
    //           </div>
    //       </div>
    //     </div>
        
    //   </>

    <>
        <div className="header">
        <h1>VitaCare</h1>
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
    </>
  );
}




