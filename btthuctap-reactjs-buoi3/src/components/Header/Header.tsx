import reactLogo from '../../assets/react.svg';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="app-brand">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <h1 className="app-title">React App</h1>
      </div>
      <nav className="navbar">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>
    </header>
    
  );
}

export default Header;