import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      console.error('Username or password is empty.');
      return;
    }

    fetchData("/user/login", { username, password }, "POST")
      .then((data) => {
        console.log('Login successful:', data);
        if(!data.message) {
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };
    return (
        <div>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={onChange}
                  value={username}
                  required
                />
                <div id="emailHelp" className="form-text">Enter your account username.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={onChange}
                  value={password}
                  required
                />
                <div id="passwordHelp" className="form-text">Enter your account password.</div>
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;