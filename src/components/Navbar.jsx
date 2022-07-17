import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
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
              <img src={user.photo[0].value} alt="avatar" className="avatar" />
            </li>
            <li className="nav-item">{user.displayName}</li>
            <li className="nav-item" onClick={ logout }>Logout</li>
          </ul>
        ) : (
          <Link className="link" to='/login'>Login</Link>
        )
      }
    </div>
  );
};

export default Navbar;
