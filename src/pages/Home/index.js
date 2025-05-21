import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./index.css";
import vitaCareHome from '../../images/VitaCare_Home.png';

export default function Home() {
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

      <section className="home_intro">
        <h1 className="title">Bem-vindo à VitaCare</h1>
        <h2 className="subtitle">Sua saúde, nossa prioridade</h2>
        <img src={vitaCareHome} alt="Imagem de boas-vindas" className="img_home" />
      </section>

      <div className="home_text_titulo">
          <h2>Sobre nós</h2>
      </div>

      <section className="home_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tristique ligula. Donec sed efficitur ligula, a fringilla ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a justo a justo posuere gravida a ac diam. Phasellus nec sem sed nisl cursus viverra. Suspendisse porta est et risus gravida, sed dignissim mauris fermentum. Fusce aliquam imperdiet magna, a fringilla orci laoreet eget. Mauris tincidunt porttitor dignissim.

          Curabitur feugiat malesuada felis, vitae rhoncus magna varius in. Etiam vitae velit ut neque bibendum sagittis. In ac lectus suscipit, pulvinar tortor nec, ultricies mi. Donec tincidunt sem non leo malesuada, sed suscipit ipsum dapibus. Sed in cursus enim. Sed convallis fermentum lacus, id euismod diam faucibus ac. Nullam at diam dignissim, commodo sem a, porta orci. Duis nec tincidunt sapien. Cras non urna ut velit convallis eleifend in eget ante.
        </p>
        
      </section>

      <div className="home_text_titulo">
        <h2>Missão</h2>
      </div>
      
      <section className="home_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a tristique ligula. Donec sed efficitur ligula, a fringilla ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a justo a justo posuere gravida a ac diam. Phasellus nec sem sed nisl cursus viverra. Suspendisse porta est et risus gravida, sed dignissim mauris fermentum. Fusce aliquam imperdiet magna, a fringilla orci laoreet eget. Mauris tincidunt porttitor dignissim.

          Curabitur feugiat malesuada felis, vitae rhoncus magna varius in. Etiam vitae velit ut neque bibendum sagittis. In ac lectus suscipit, pulvinar tortor nec, ultricies mi. Donec tincidunt sem non leo malesuada, sed suscipit ipsum dapibus. Sed in cursus enim. Sed convallis fermentum lacus, id euismod diam faucibus ac. Nullam at diam dignissim, commodo sem a, porta orci. Duis nec tincidunt sapien. Cras non urna ut velit convallis eleifend in eget ante.
        </p>
      </section>
    </>
  );
}
