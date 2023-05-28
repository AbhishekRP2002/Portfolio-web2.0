import React from "react";
import { useState } from "react";
import "./Footer.css";

function Footer() {

    return (
        <>


<div className="container">
          <div className="units-row">
            <div className="unit-50">
              <p>Designed by Abhishek Ranjan</p>
            </div>
            <div className="unit-50">
              <ul className="social list-flat right">
                <li>
                  <a href="mailto:aviranjan444@gmail.com">
                    <i className="fa fa-send"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/abhishek_rp2002">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="http://github.com/AbhishekRP2002">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/abhishek-ranjan-2002/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
            </>
    );

}

export default Footer;
