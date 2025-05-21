
import Routes from "./routes";
import logo from './images/logo.png';
import "./App.css"
import Header from "./components/Header/header";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import Depoimento from "./pages/Depoimento";
import Equipe from "./pages/Equipe";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";


function App() {
  return (

    
      <Home />

      
      // {/* <>
      //   <div className="header">
      //   <h1>VitaCare</h1>
      //   <img src={logo} alt='VitaCare Logo'></img>

      //   <div className='buttons_pages'>
      //         <div className='buttons'>
      //             <button className='button' href="/">Home</button>
      //             <button className='button' href="/servicos">Serviços</button>
      //             <button className='button' href="/equipe">Equipe</button>
      //             <button className='button' href="/depoimentos">Depoimentos</button>
      //             <button className='button' href="/contato">Contato</button>
      //             <button className='button' href="/sobre">Sobre</button>
      //         </div>
      //     </div>
      //   </div>

      // </> */}
    


//     <Routes>
//     <>
//       <div className="header">
//       <h1>VitaCare</h1>
//       <img src={logo} alt='VitaCare Logo'></img>

//       <div className='buttons_pages'>
//             <div className='buttons'>
//                 <Link className='button' to="/">Home</button>
//                 <Link className='button' to="/servicos">Serviços</Link>
//                 <Link className='button' to="/equipe">Equipe</Link>
//                 <Link className='button' to="/depoimentos">Depoimentos</Link>
//                 <Link className='button' to="/contato">Contato</Link>
//                 <Link className='button' to="/sobre">Sobre</Link>
//             </div>
//         </div>
//       </div>

//     </>
// </Routes>
);
}

export default App;
