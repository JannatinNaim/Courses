import Banner from "../images/banner.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-banner" src={Banner} alt="Banner" />

      <div className="hero-content">
        <h1 className="title">Online Experiences</h1>
        <p className="sub-title">
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
