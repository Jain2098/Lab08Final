import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import UserLogin from "./UserLogin";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import NotFound from "./NotFound";
import Success from "./Success";

export default function NavBar(props) {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/Success/:name/:id/:type" element={<Success />} />
          <Route path="/Success/:id/:type" element={<Success />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
