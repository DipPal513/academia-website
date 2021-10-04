import React from "react";

const Contact = () => {
  return (
    <>
      <section className="container contact py-5">
        <h1 className="mb-5 text-center text-uppercase">
          contact <span style={{ color: "#f37335" }}>us</span>
        </h1>
        <div className="contact-page mx-auto">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="contact-form">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="fname">
                    First Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Enter First Name"
                      name="fname"
                    />
                  </div>
                </div>
                <div className="form-group my-3">
                  <label className="control-label col-sm-2" htmlFor="lname">
                    Last Name:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      placeholder="Enter Last Name"
                      name="lname"
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="control-label col-sm-2" htmlFor="email">
                    Email:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="comment">
                    Comment:
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="comment"
                    ></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-success mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
