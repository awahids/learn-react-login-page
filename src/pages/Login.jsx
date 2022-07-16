import Google from '../assets/img/google.png';
import Facebook from '../assets/img/facebook.png';
import Github from '../assets/img/github.png';

const Login = () => {
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const facebook = () => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  };

  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self');
  };

  return (
    <div className='login'>
      <h1 className="login-title">
        Choose a Login Method
      </h1>
      <div className="wrapper">
        <div className="left">
          <div className="login-btn google" onClick={ google }>
            <img src={ Google } alt="" className="login-icon" />
            Google
          </div>
          <div className="login-btn facebook">
            <img src={ Facebook } alt="" className="login-icon" />
            Facebook
          </div>
          <div className="login-btn github">
            <img src={ Github } alt="" className="login-icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button className="submit-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;