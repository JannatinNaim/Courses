function BioData(props) {
  return (
    <div className="bio-data">
      <h1>Bio Data of {props.name}</h1>

      <div className="personal-info">
        <h2>Personal Info</h2>

        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
      </div>

      <div className="social-info">
        <h2>Social Info</h2>

        <p>LinkedIn: https://linkedin.com/in/{props.linkedInUrl}/</p>
        <p>GitHub: https://github.com/{props.githubUrl}/</p>
        <p>Twitter: https://twitter.com/{props.twitterUrl}/</p>
      </div>

      <div className="skills">
        <h2>Skills</h2>

        <ul>
          {props.skills.map((skill) => (
            <li key={skill.toString()}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="interests">
        <h2>Interests</h2>

        <ul>
          {props.interests.map((interest) => (
            <li key={interest.toString()}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BioData;
