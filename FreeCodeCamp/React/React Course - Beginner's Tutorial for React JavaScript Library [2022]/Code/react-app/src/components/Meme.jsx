const Meme = (props) => {
  const { meme } = props;

  return (
    <div className="meme">
      <span className="meme-top">{meme.top}</span>
      <img className="meme-image" src={meme.image} alt="Meme" />
      <span className="meme-bottom">{meme.bottom}</span>
    </div>
  );
};

export default Meme;
