import React, { useContext } from "react";
import { userContext } from "../../App";
import Service from "../Service/Service";

const Services = () => {
  const { data } = useContext(userContext);
  return (
    <div className="container">
      <h1 className="text-uppercase text-center my-4">
        our <span style={{ color: "#f37335" }}>services</span>
      </h1>
      <div className="row">
        {data.map((el, index) => (
          <Service key={index} course={el} />
        ))}
      </div>
    </div>
  );
};

export default Services;
