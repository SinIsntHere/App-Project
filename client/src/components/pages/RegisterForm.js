import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const {username, password} = user;

  const onChange = (e) =>setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", {username, password}, "POST")

    .then((data) => {
      if(!data.message) {
        console.log(data)
        navigate("/")
      }
    })
    .catch((error) => {
      console.log(error)
    })

  }

    return (
        <div>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name='username'
                  onChange={onChange}
                  value={username}
                  required
                />
                <div id="emailHelp" className="form-text">Enter a Username.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password"
                  className="form-control"
                  id="password"
                  name='password'
                  onChange={onChange}
                  value={password}
                  required
                />
                <div id="passwordHelp" className="form-text">Create a Password.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;