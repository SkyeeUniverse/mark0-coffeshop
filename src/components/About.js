import React from "react";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <h2>
          <span>Tentang</span> Kami
        </h2>
        <div className="row">
          <div className="about-img">
            <img src={aboutImg} alt="tentang-kami" />
          </div>
          <div className="content">
            <h3>Kenapa memilih kopi kami ?</h3>
            <p>
              nisl condimentum id venenatis a condimentum vitae sapien
              pellentesque habitant morbi tristique senectus et netus
            </p>
            <p>
              dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
              non odio euismod lacinia at quis risus sed vulputate odio
            </p>
            <p>
              pellentesque diam volutpat commodo sed egestas egestas fringilla
              phasellus faucibus scelerisque eleifend donec pretium vulputate
              sapien nec sagittis aliquam malesuada bibendum arcu vitae
              elementum curabitur vitae nunc sed velit dignissim sodales ut eu
              sem integer vitae justo eget magna fermentum iaculis eu non diam
              phasellus vestibulum lorem sed risus ultricies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
