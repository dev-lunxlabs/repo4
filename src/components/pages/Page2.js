import React from "react";
import "../../styles/Page.css";
import artice1 from "../images/article1.svg";
import artice2 from "../images/article2.svg";
import artice3 from "../images/article3.svg";
import ss from "../images/ss.png";
import ssLarge from "../images/ssLarge.png";
import asus1 from "../images/asus1.svg";
import vans1 from "../images/vans1.svg";
import adidas1 from "../images/adidas1.svg";
import visa1 from "../images/visa1.svg";
import mercedes1 from "../images/mercedes1.svg";
import dodge1 from "../images/dodge1.svg";
import screen from "../images/screen.png";

import pinterest2 from "../images/pinterest2.svg";
import medium2 from "../images/medium2.svg";
import youtube2 from "../images/youtube2.svg";
import visa2 from "../images/visa2.svg";
import adidas2 from "../images/adidas2.svg";
import dodge2 from "../images/dodge2.svg";
const Page2 = (props) => {
  return (
    <>
      <section>
        <div className="container centralize mt-50">
          <p className="title title-font">
            VidApp makes it easy to Build, Design and Launch
          </p>
        </div>
      </section>
      <section>
        <div className="articles mb-50">
          <div className="article">
            <img className="article-image" src={artice1} alt=""></img>
            <p className="sub-title">Connect and Sync</p>
            <p className="article-content">
              Connect VidApp to your existing website or channel to sync your
              content and users.
            </p>
          </div>
          <div className="article">
            <img className="article-image" src={artice2} alt=""></img>
            <p className="sub-title">Design and Build</p>
            <p className="article-content">
              We'll help build a customized app using our speciality features,
              templates and designs.
            </p>
          </div>
          <div className="article">
            <img className="article-image" src={artice3} alt=""></img>
            <p className="sub-title">Launch and Maintain</p>
            <p className="article-content">
              Launch into all major App Stores! We’ll take care of the
              submission and future app updates.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-75">
        <div className="flex-space-evenly">
          <div className="flex">
            <img className="screen1" src={ss} alt=""></img>
            <img className="screen2-100" src={ssLarge} alt=""></img>
          </div>
          <div className="flex-col-start-start">
            <div className="header">
              <p>Mobile + TV</p>
            </div>
            <div className="title title-font">
              <p>Grow your audience across mobile + TV.</p>
            </div>
            <div className="description">
              <p>
                Create the ultimate "on-demand" experience across iOS, Android,
                Apple TV, Roku and Amazon Fire.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex  brands space-evenly">
        <div className="centralize">
          <img className="logos" src={asus1} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={vans1} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={adidas1} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={visa1} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={mercedes1} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={dodge1} alt=""></img>
        </div>
      </div>

      <section className="mt-50">
        <div className="flex-space-evenly">
          <div className="flex-col-start">
            <div className="header">
              <p>VidApp Builder</p>
            </div>
            <div className="title title-font">
              <p>The world's best video streaming apps.</p>
            </div>
            <div className="description">
              <p>
                Beautifully crafted apps, for world-leading experts and
                influencers.
              </p>
            </div>
            <div className="flex">
              <button className="intouch">See Builder Feature</button>
            </div>
          </div>
          <div className="flex">
            <img className="screen1" src={screen} alt=""></img>
          </div>
        </div>
      </section>

      <div className="bg-dark centralize ">
        <p className="title-white mt-25">
          Integrate your current online course or OTT platform.
        </p>
      </div>
      <div className="flex bg-dark brands space-evenly">
        <div className="centralize">
          <img className="logos" src={pinterest2} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={medium2} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={youtube2} alt=""></img>
        </div>
      </div>
      <div className="flex bg-dark brands space-evenly">
        <div className="centralize">
          <img className="logos" src={visa2} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={adidas2} alt=""></img>
        </div>
        <div className="centralize">
          <img className="logos" src={dodge2} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Page2;
