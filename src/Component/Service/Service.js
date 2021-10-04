import React from "react";
import "./Service.css";

const Service = (props) => {
  const { title, day, time, teacher, salary, image } = props.course;
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">
            {day} {time}
          </p>
          <div className="box d-flex align-items-center justify-content-between">
            <h5 className="teacher">{teacher}</h5>
            <h4 className="salary me-3">{salary}</h4>
          </div>
          <a className="btn btn-dark">Enroll Now</a>
        </div>
      </div>
    </div>
  );
};

export default Service;
