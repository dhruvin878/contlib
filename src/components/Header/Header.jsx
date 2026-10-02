import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        CONTLIB
      </div>

      <div className="side-nav">
       <a href="#home">HOME</a>
<a href="#services">SERVICES</a>
<a href="#work">OUR WORK</a>
      </div>
    </header>
  );
}

export default Header;