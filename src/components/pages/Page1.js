import React from "react";
import "../../styles/Page.css";
import screen1 from "../images/smallScreen.png";
import screen2 from "../images/largeScreen.png";
import pinterest from "../images/pinterest.svg";
import medium from "../images/medium.svg";
import youtube from "../images/youtube.svg";
import visa from "../images/visa.svg";
import adidas from "../images/adidas.svg";
import dodge from "../images/dodge.svg";
const Page1 = (props) => {
  return (
    <>
      <section className="mt-50">
        <div className="flex-space-evenly">
          <div className="flex-col-start">
            <div className="title">
              <p>The world's best video streaming apps.</p>
            </div>
            <div className="description">
              <p>
                Beautifully crafted apps, for world-leading experts and
                influencers.
              </p>
            </div>
            <div className="flex">
              <button className="intouch">Start Free Trial</button>
            </div>
          </div>
          <div className="flex">
            <img className="screen1" src={screen1} alt=""></img>
            <img className="screen2" src={screen2} alt=""></img>
          </div>
        </div>
      </section>
      <div className="flex bg-dark brands space-evenly">
        <div className="centralize">
          <img className="logos" src={pinterest} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={medium} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={youtube} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={visa} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={adidas} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={dodge} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Page1;
