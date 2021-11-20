/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import logo from './dice.png';

const Header = () => {
  
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="50" height="40" className="d-inline-block align-text-top" />
          </a>
          <div className="flex-container">
          <a className="navbar-brand" href="#projetos">Projetos</a>
          <a className="navbar-brand" href="#contatos">Contatos</a>
          </div>
        </div>
       
      </nav>
    </header>
  )

}

export default Header;