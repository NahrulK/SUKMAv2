import React, { Suspense } from "react";
import "./header.css";
import Images from "./../../components/img/Images";

// images

import leftBanner from "./../../assets/bann-left.png";
import rightBanner from "./../../assets/bann-right.png";
import cool from "./../../assets/cool.png";
import kind from "./../../assets/kind.png";

const Header = () => {
  return (
    <header className="sukmav2__header section__padding" id="home">
      <div className="sukmav2__header-content">
        <div className="sukmav2__header-content_left">
          <h1 className="sukmav2__header-content_left-header">Stop Bullying</h1>
          <p className="sukmav2__header-content_left-text">
            {" "}
            Bullying merupakan tindak kekerasan atau penindasan kepada orang
            lain yang dilakukan dengan sengaja oleh orang yang lebih kuat dan
            berkuasa
          </p>
          <button type="button" className="sukmav2__header-content_left-button">
            Learn More
          </button>
        </div>

        <div className="sukmav2__header-content_right">
          <div className="sukmav2__header-content_right-top">
            <div className="sukmav2__header-content_right-top-circle">
              <Suspense fallback={<div>Loading...</div>}>
                <Images
                  src={leftBanner}
                  className={"sukmav2__header-content_right-top-image"}
                />
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Images
                src={cool}
                className={"sukmav2__header-content_right-top-buble"}
              />
            </Suspense>
          </div>
          {/* BR */}
          <div className="sukmav2__header-content_right-bottom">
            <Suspense fallback={<div>Loading...</div>}>
              <Images
                src={kind}
                className={"sukmav2__header-content_right-bottom-buble"}
              />
            </Suspense>

            <div className="sukmav2__header-content_right-bottom-circle">
              <Suspense fallback={<div>Loading...</div>}>
                <Images
                  src={rightBanner}
                  className={"sukmav2__header-content_right-bottom-image"}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
