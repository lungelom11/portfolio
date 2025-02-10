import Logo from "../../assets/command-line.png"
import "./navbar.css"
import { GoDownload } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";



const Navbar = () => {
  return (
    <nav className="nav-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h2>Lungelo_dev</h2>
        </div>
        <div className="menu-items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Projects</a></li>
            <li>
                <button type="downlaod" className="download-btn">
                  <span className="download-icon"><GoDownload /></span>
                  Download CV
                </button>
            </li>
          </ul>
        </div>
        <div className="burger-menu">
          <CiMenuFries />
        </div>
    </nav>

  )
}

export default Navbar