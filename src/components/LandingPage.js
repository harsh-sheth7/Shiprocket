import logo from "../Full_Logo.png";
// import backgroundImg from "../../Landing_background.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
    //   style={{
    //     backgroundImage: `url(${backgroundImg})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    >
      <div className="container mx-auto">
        <header class="d-flex align-items-center justify-content-between px-3 py-4 mx-auto">
          <Link to="/" className="d-flex align-items-center">
            <img className="logoImg" src={logo} alt="logo" />
          </Link>
          <div id="guest" class="d-flex align-items-center">
            <div class=" position-relative">
              <Link
                to="/login"
                className="btn-light px-3 py-2 rounded shadow font-weight text-decoration-none mx-3"
              >
                Log in
              </Link>
            </div>
            {"      "}
            <Link
              to="/signup"
              className="btn-dark text-white px-3 py-2 rounded shadow font-weight text-decoration-none"
            >
              Sign up
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default LandingPage;
