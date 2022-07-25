import Meme from "./Meme";
import memes from "../data/memes";
import { useState } from "react";

const MemeInput = () => {
  const [meme, setMeme] = useState({
    top: "",
    bottom: "",
    image: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const handleGenerate = () => {
    const allMemes = memes.data.memes;
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

    setMeme((prevMeme) => ({
      ...prevMeme,
      image: randomMeme.url,
    }));
  };

  const handleValueChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="meme-input">
      <div className="inputs">
        <input
          className="top"
          name="top"
          type="text"
          placeholder="Top"
          value={meme.top}
          onChange={handleValueChange}
        />

        <input
          className="bottom"
          name="bottom"
          type="text"
          placeholder="Bottom"
          value={meme.bottom}
          onChange={handleValueChange}
        />
      </div>

      <button className="generate" onClick={handleGenerate}>
        Generate Meme
      </button>

      <Meme meme={meme} />
    </div>
  );
};

export default MemeInput;
