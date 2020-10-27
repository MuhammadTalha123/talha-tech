import React from 'react';
import web from "../src/images/img2.svg";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <section id="header" className="d-flex align-items-center">
              <div className="container-fluid nav_bg">
               <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>
                          Grow your business with <strong className="brand-name">Talha Technicals</strong>
                      </h1>
                      <h2 className="my-3">
                          We are the team of talented developer making websites
                      </h2>
                      <div className="mt-3">
                          <NavLink href="" className="btn-get-started">Get Started</NavLink>
                      </div>
                  </div>
                  
                  <div className="collg-6 order-1 order-lg-2 header-img">
                      <img src={web} className="img-fluid animated" alt="Home Image" />
                  </div>
                  </div>
                </div>
               </div>
              </div>
            </section>
        </>
    );
};

export default Home;
