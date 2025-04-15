import pit_image from "../../pit_image.jpg";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="laptop">
        <img className="logo-image" src={pit_image} alt="logo" />
        <h1 className="nav-heading">POLITICAL INTELLIGENCE TEAM</h1>
        <p className="nav-name">Pavan</p>
      </div>
      <div className="mobile-nav">
        <img className="logo-image" src={pit_image} alt="logo" />
        <div className="right-nav-container">
          <h1 className="nav-heading">POLITICAL INTELLIGENCE TEAM</h1>

          <p className="nav-name">Pavan</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
