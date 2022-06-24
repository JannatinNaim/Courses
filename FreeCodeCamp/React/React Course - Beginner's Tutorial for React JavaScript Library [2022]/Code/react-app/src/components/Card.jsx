import Image from "./Image";
import Profile from "./Profile";
import Info from "./Info";
import Socials from "./Socials";

function Card() {
  return (
    <div className="card">
      <Image />
      <Profile />
      <Info />
      <Socials />
    </div>
  );
}

export default Card;
