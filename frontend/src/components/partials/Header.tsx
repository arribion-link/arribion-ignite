import { Link } from "react-router-dom"
import Logo from '../assets/Images/logo.jpg'
const Header = () => {
    const logoName ={
        color: "dodgerblue",
        fontSize: '1.2em',
        fontWeight: 700
    }
  return (
      <header>
        <Link to={'/'}>
        <div className="logo-container">
            <img src={Logo} 
            alt="arribion ignite logo " 
            className='logo'
            />
            <div>
                <h3 style={logoName}>Arribion Ignite</h3>
            </div>
        </div>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link
                        to={'/'}
                          className="nav-link"
                          id="active-link"
                    >
                        Home
                    </Link>
                </li>
                  <li>
                      <Link
                          to={'/courses'}
                          className="nav-link"
                      >
                          Courses
                      </Link>
                  </li>
                <li><Link to="/blog" className="nav-link">Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
