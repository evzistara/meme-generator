import TrollFace from "../assets/TrollFace.svg";

function Navbar() {
  return (
    <nav className="navbar bg-linear-to-r from-dark-purple to-light-purple flex gap-2 px-8 py-5">
      <img src={TrollFace} alt="Troll Face logo" />
      <h1 className="text-white text-2xl">Meme generator</h1>
    </nav>
  );
}
export default Navbar;
