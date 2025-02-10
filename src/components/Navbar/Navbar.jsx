import Logo from "../../assets/command-line.png"
import "./navbar.css"
import { GoDownload } from "react-icons/go";


const Navbar = () => {
  return (
    <nav className="nav-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h2>Lungelo_dev</h2>
        </div>
        <div className="menu-items">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>
                <button type="downlaod" className="download-btn">
                  <GoDownload />
                  Download CV
                  </button>
            </li>
          </ul>
        </div>
    </nav>

  )
}

export default Navbar