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
        <div className="logo-container">
            <img src={Logo} 
            alt="arribion ignite logo " 
            className='logo'
            />
            <div>
                <h3 style={logoName}>Arribion Ignite</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/courses'}>Courses</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
