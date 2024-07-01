import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">The Scoop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-success" to="/Register">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-success" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-primary" to="/Profile">Profile</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <Outlet />
        </div>
    );
}

export default Navbar;