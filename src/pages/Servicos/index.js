import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./index.css"
import Header from "../../components/Header"


export default function Servicos() {
  return (

    <>
      <Header />
    </>

    // <>
    //   <div className="header">
    //     <img src={logo} alt="VitaCare Logo" />
    //   </div>

    //   <div className='buttons_pages'>
    //     <div className='buttons'>
    //       <Link className='button' to="/">Home</Link>
    //       <Link className='button' to="/sobre">Sobre</Link>
    //       <Link className='button' to="/equipe">Equipe</Link>
    //       <Link className='button' to="/depoimentos">Depoimentos</Link>
    //       <Link className='button' to="/blog">Blog</Link>
    //       <Link className='button' to="/contato">Contato</Link>
    //     </div>
    //   </div>
    // </>
  );
}



