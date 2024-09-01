import { forwardRef } from "react";
import { NavLink } from "react-router-dom";

const Hero = forwardRef((props, ref) => {
  return (
    <div className="container hero" ref={ref}>
      <div className="title">
        <h1>The business account that gets jobs done.</h1>
      </div>
      <div className="subtitle">
        <p>
          Business banking, made better: an online account that helps you pay,
          get paid, invoice, book keep, manage expenses, find financing &
          oversee cash flow.
        </p>
      </div>
      <div className="cta">
        <NavLink>
          <button className="btn submit-btn">Discover our offers</button>
        </NavLink>
      </div>
      <div className="pricing">
        <p>From €9/month excl. VAT. Try it free for 30 days.</p>
      </div>
      <div className="feature">7-day-a-week customer service</div>
      <div className="jpeg"></div>
    </div>
  );
});
export default Hero;
