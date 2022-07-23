const Card = (props) => {
  const { image, status, rating, reviews, country, description, price } = props;

  return (
    <div className="card">
      <div className="card-banner">
        <img
          className="banner-image"
          src={"./images/" + image}
          alt="Item description."
        />
        <span className="status">{status.toUpperCase()}</span>
      </div>

      <div className="card-stats">
        <span className="rating">
          <span className="rating-icon">X</span>
          <span className="rating-text">{rating}</span>
        </span>

        <span className="divider"> </span>

        <span className="reviews">({reviews})</span>

        <span className="divider"> . </span>

        <span className="country">{country.toUpperCase()}</span>
      </div>

      <p className="card-description">{description}</p>

      <span className="card-pricing">
        <span className="pricing">From ${price}</span> / person
      </span>
    </div>
  );
};

export default Card;
