import React from "react";
import web from "../src/images/image8.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
