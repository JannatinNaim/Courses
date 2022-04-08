import "./BioData.scss";

function BioData(props) {
  return (
    <div className="bio-data">
      <h2 className="bio-data__name">Bio Data of {props.name ?? "No Name"}</h2>
      {/* .bio-data__name */}

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
      {/* .personal-information */}

      <ul className="hobbies">
        <h3 className="hobbies__name">Hobbies</h3>

        {props.hobbies?.map((hobby, index) => (
          <li key={index} className="hobbies__hobby">
            {hobby}
          </li>
        )) ?? <li className="hobbies__hobby">No Hobbies</li>}
      </ul>
      {/* .hobbies */}

      <ul className="interests">
        <h3 className="interests__name">Interests</h3>

        {props.interests?.map((interest, index) => (
          <li key={index} className="interests__interest">
            {interest}
          </li>
        )) ?? <li className="interests__interest">No Interests</li>}
      </ul>
      {/* .interests */}
    </div>
  );
}

export default BioData;
