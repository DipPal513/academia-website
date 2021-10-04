import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <h1 className="text-uppercase text-center my-5">
        About <span style={{ color: "#f37335" }}>us</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-capitalize">our mission</h2>
            <p>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
              maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod
              tempor maecenas accumsan.
            </p>
          </div>
          <div className="col-lg-8 my-5">
            <h2 className="text-capitalize">our vision</h2>
            <p>
              Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
              labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
              Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
              lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
              accumsan lacus.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <span className="text-uppercase" style={{ color: "blue" }}>
              more about our company
            </span>
            <h1 className="text-capitalize my-4 " style={{ color: "#030431" }}>
              want to know more
            </h1>
            <p className="text-muted">
              There arge many variations ohf passages of sorem gpsum ilable, but
              the majority have suffered alteration in some form, by ected
              humour, or randomised words whi.
            </p>
            <ul style={{ listStyle: "none" }} className="ps-0 about-list">
              <li>Creative ideas base</li>
              <li>Assages of sorem gpsum ilable</li>
              <li>Have suffered alteration in so</li>
              <li>Randomised words whi</li>
            </ul>
            <button className="text-capitalize mb-4 about-btn">
              more about us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
