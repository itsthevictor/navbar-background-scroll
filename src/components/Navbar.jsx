import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { forwardRef } from "react";
const Navbar = forwardRef((props, ref) => {
  return (
    <Wrapper>
      <nav id="Navbar" ref={ref}>
        <div className="left">
          <NavLink to="#">
            {" "}
            <Logo />
          </NavLink>
          <div className="nav-links">
            <NavLink>solutions</NavLink>
            <NavLink>product</NavLink>
            <NavLink>resources</NavLink>
            <NavLink>pricing</NavLink>
          </div>
        </div>
        <div className="right">
          <NavLink>Sign in</NavLink>
          <NavLink>
            <button className="btn submit-btn">Open an account</button>
          </NavLink>
        </div>
      </nav>
    </Wrapper>
  );
});
export default Navbar;
