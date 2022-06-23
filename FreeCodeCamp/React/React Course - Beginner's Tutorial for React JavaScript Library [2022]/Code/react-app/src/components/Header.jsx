import reactLogo from "../images/react.png";

function Header() {
  return (
    <header className="header">
      <div className="branding">
        <img className="branding-logo" src={reactLogo} alt="React logo" />
        <span className="branding-name">ReactFacts</span>
      </div>

      <span className="header-info">React Course - Project 1</span>
    </header>
  );
}

export default Header;
