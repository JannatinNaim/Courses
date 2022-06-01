import "./Hobbies.scss";

function Hobbies(props) {
  return (
    <ul className="hobbies">
      <h3 className="hobbies__name">Hobbies</h3>

      {props.hobbies?.map((hobby, index) => (
        <li key={index} className="hobbies__hobby">
          {hobby}
        </li>
      )) ?? <li className="hobbies__hobby">No Hobbies</li>}
    </ul>
  );
}

export default Hobbies;
