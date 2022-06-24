function Profile() {
  return (
    <div className="card-header">
      <h1 className="name">Jannatin Naim</h1>
      <span className="title">Frontend Developer</span>
      <a className="website" href="https://jannatinnaim.com/">
        jannatinnaim.com
      </a>

      <div className="button-grid">
        <button className="button">
          <span className="button-icon">H</span> <span className="button-text">Email</span>
        </button>

        <button className="button">
          <span className="button-icon">H</span> <span className="button-text">LinkedIn</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
