import Banner from "../images/item_b.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-banner">
        <img className="banner-image" src={Banner} alt="Item description." />
        <span className="status">sold</span>
      </div>

      <div className="card-stats">
        <span className="rating">
          <span className="rating-icon">X</span> 4.8
        </span>

        <span className="divider"> </span>

        <span className="reviews">(5)</span>

        <span className="divider"> . </span>

        <span className="country">USA</span>
      </div>

      <p className="card-description">Life lessons from some rando.</p>

      <span className="card-pricing">
        <span className="pricing">From $111</span> / person
      </span>
    </div>
  );
};

export default Card;
