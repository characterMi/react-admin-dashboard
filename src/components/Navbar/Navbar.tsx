import './navbar.scss';
import Logo from "../../../public/logo.svg"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
        <span>atadmin</span>
      </div>
      <div className='icons'>
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/avatar.svg" alt="user" />
          <span>Abolfazl</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>
    </nav>
  )
}

export default Navbar