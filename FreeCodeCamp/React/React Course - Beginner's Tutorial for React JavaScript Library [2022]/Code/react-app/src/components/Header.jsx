import AirBnBBanner from "../images/airbnb.png";

const Header = () => {
  return (
    <header className="page-header">
      <img className="branding-logo" src={AirBnBBanner} alt="AirBnB Banner" />
    </header>
  );
};

export default Header;
