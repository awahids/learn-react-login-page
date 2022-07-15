import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  }

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to='/'>Learn React</Link>
      </span>
      {
        user ? (
          <ul className="nav-list">
            <li className="nav-item">
              <img src="https://pbs.twimg.com/profile_images/1490533817416925189/oDKK6UFj_400x400.jpg" alt="avatar" className="avatar" />
            </li>
            <li className="nav-item">John Doe</li>
            <li className="nav-item" onClick={ logout }>Logout</li>
          </ul>
        ) : (
          <Link className="link" to='/login'>Login</Link>
        )
      }
    </div>
  );
}

export default NavBar;