
const Header = () => {
    const logoName ={
        color: "dodgerblue"
    }
  return (
     <header>
        <div className="logo-container">
            <img src="" 
            alt="arribion ignite logo " 
            className='logo'
            />
            <div>
                <h3 style={logoName}>Arribion Ignite</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Courses</a></li>
                <li><a href="/">Blog</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
