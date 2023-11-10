import Google from '../assets/img/google.png';
import Twitter from '../assets/img/twitter.png';
import Github from '../assets/img/github.png';

const Login = () => {
  const google = () => {
    window.open('https://learn-react-login-page.vercel.app/auth/google', '_self');
  };

  const twitter = () => {
    window.open('https://learn-react-login-page.vercel.app/auth/twitter', '_self');
  };

  const github = () => {
    window.open('https://learn-react-login-page.vercel.app/auth/github', '_self');
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
          <div className="login-btn twitter" onClick={ twitter }>
            <img src={ Twitter } alt="" className="login-icon" />
            Twitter
          </div>
          <div className="login-btn github" onClick={ github }>
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
