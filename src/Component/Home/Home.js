import React, { useContext } from "react";
import { userContext } from "../../App";
import Service from "../Service/Service";
import "./Home.css";
const Home = () => {
  const { data } = useContext(userContext);
  return (
    <>
      <section className="banner  d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5 className="fw-bold text-muted">WELCOME TO ACADEMIA</h5>
              <h1 className="text-capitalize text-white fw-bold">
                Best Online Education Expertise
              </h1>
              <p className="text-muted mt-3">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="btn-group">
                <button className="btn btn-dark text-uppercase">
                  get started now
                </button>
                <button className="btn btn-info ms-3 text-uppercase text-white">
                  view course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-5">
        <h1 className="text-uppercase text-center my-4 pb-4">
          our <span style={{ color: "#f37335" }}>services</span>
        </h1>
        <div className="row">
          {data
            .map((el, index) => <Service key={index} course={el} />)
            .slice(0, 4)}
        </div>
      </div>
    </>
  );
};

export default Home;
