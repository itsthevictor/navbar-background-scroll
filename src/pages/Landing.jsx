import React, { useRef, useEffect } from "react";

import Wrapper from "../assets/wrappers/Landing";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef();
  const aboutRef = useRef();
  const pricingRef = useRef();
  const contactRef = useRef();
  const navbarRef = useRef();
  const servicesRef = useRef();
  useEffect(() => {
    const triggers = [
      {
        start: "top 80px",
        end: "bottom 80px",
        class: "white",
        trigger: heroRef.current,
        target: navbarRef.current,
      },
      {
        start: "top 80px",
        end: "bottom 80px",
        class: "grey",
        trigger: aboutRef.current,
        target: navbarRef.current,
      },
      {
        start: "top 80px",
        end: "bottom 80px",
        class: "black",
        trigger: pricingRef.current,
        target: navbarRef.current,
      },
      {
        start: "top 80px",
        end: "bottom 80px",
        class: "green",
        trigger: servicesRef.current,
        target: navbarRef.current,
      },
      {
        start: "top 80px",
        end: "bottom 80px",
        class: "purple",
        trigger: contactRef.current,
        target: navbarRef.current,
      },
    ];

    triggers.forEach((trigger) => {
      ScrollTrigger.create({
        start: trigger.start,
        end: trigger.end,
        markers: true,
        trigger: trigger.trigger,
        toggleClass: {
          className: trigger.class,
          targets: trigger.target,
        },
      });
    });
  }, []);

  return (
    <Wrapper>
      <Navbar background={""} ref={navbarRef} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Pricing ref={pricingRef} />
      <Contact ref={contactRef} />
    </Wrapper>
  );
};
export default Landing;
