import "./BioData.scss";
import PersonalInformation from "./PersonalInformation";
import Hobbies from "./Hobbies";
import Interests from "./Interests";

function BioData(props) {
  return (
    <div className="bio-data">
      <h2 className="bio-data__name">Bio Data of {props.name ?? "No Name"}</h2>

      <PersonalInformation
        name={props.name}
        age={props.age}
        gender={props.gender}
        phone={props.phone}
        email={props.email}
      />

      <Hobbies hobbies={props.hobbies} />

      <Interests interests={props.interests} />
    </div>
  );
}

export default BioData;
