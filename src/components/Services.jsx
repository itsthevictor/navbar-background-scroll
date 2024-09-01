import { forwardRef } from "react";
const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container green">
      Services
    </div>
  );
});
export default Services;
