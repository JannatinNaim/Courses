import "./PersonalInformation.scss";

function PersonalInformation(props) {
  return (
    <div className="personal-information">
      <h3 className="personal-information__name">Personal Information</h3>

      <div className="personal-information__item">
        <span className="personal-information__item__name">Name</span>
        <span className="personal-information__item__divider">:</span>
        <span className="personal-information__item__info">{props.name ?? "No Name Provided"}</span>
      </div>
      {/* .personal-information__item */}

      <div className="personal-information__item">
        <span className="personal-information__item__name">Age</span>
        <span className="personal-information__item__divider">:</span>
        <span className="personal-information__item__info">{props.age ?? "No Age Provided"}</span>
      </div>
      {/* .personal-information__item */}

      <div className="personal-information__item">
        <span className="personal-information__item__name">Gender</span>
        <span className="personal-information__item__divider">:</span>
        <span className="personal-information__item__info">{props.gender ?? "No Gender Provided"}</span>
      </div>
      {/* .personal-information__item */}

      <div className="personal-information__item">
        <span className="personal-information__item__name">Phone</span>
        <span className="personal-information__item__divider">:</span>
        <span className="personal-information__item__info">{props.phone ?? "No Phone Provided"}</span>
      </div>
      {/* .personal-information__item */}

      <div className="personal-information__item">
        <span className="personal-information__item__name">Email</span>
        <span className="personal-information__item__divider">:</span>
        <span className="personal-information__item__info">{props.email ?? "No Email Provided"}</span>
      </div>
      {/* .personal-information__item */}
    </div>
  );
}

export default PersonalInformation;
