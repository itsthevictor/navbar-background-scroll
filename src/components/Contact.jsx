import { forwardRef } from "react";
const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container purple">
      Contact
    </div>
  );
});
export default Contact;
