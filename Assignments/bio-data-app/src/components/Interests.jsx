import "./Interests.scss";

function Interests(props) {
  return (
    <ul className="interests">
      <h3 className="interests__name">Interests</h3>

      {props.interests?.map((interest, index) => (
        <li key={index} className="interests__interest">
          {interest}
        </li>
      )) ?? <li className="interests__interest">No Interests</li>}
    </ul>
  );
}

export default Interests;
