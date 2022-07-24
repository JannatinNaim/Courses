const Card = (props) => {
  const {
    banner,
    country,
    googleMapLocation,
    place,
    arrival,
    departure,
    description,
  } = props.item;

  return (
    <div className="card">
      <div className="banner">
        <img
          className="banner-image"
          src={"images/" + banner}
          alt={description}
        />
      </div>

      <div className="content">
        <div className="location">
          <div className="country">
            <img
              className="country-icon"
              src="images/location.png"
              alt="Pin icon"
            />
            <span className="country-name">{country}</span>
          </div>

          <a className="maps-link" href={googleMapLocation}>
            Visit on Google Maps
          </a>
        </div>

        <h3 className="place">{place}</h3>

        <div className="course">
          <span className="arrival">{arrival}</span>
          <span className="divider"> - </span>
          <span className="departure">{departure}</span>
        </div>

        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
