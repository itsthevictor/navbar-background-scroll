import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container grey">
      About
    </div>
  );
});
export default About;
