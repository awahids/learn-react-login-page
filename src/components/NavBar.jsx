const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Learn React</span>
      <ul className="nav-list">
        <li className="nav-item">
          <img src="https://pbs.twimg.com/profile_images/1490533817416925189/oDKK6UFj_400x400.jpg" alt="avatar" className="avatar" />
        </li>
        <li className="nav-item">John Doe</li>
        <li className="nav-item">Logout</li>
      </ul>
    </div>
  );
}

export default NavBar;