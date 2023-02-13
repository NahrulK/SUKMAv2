import React, { Suspense } from "react";
import "./slider.css";
import { Statuscard, Card, Slideaction, Images } from "../../components";
import { Fisik } from "./../../assets";
import { AiFillHeart } from "react-icons/ai";

const Slider = () => {
  return (
    <>
      <Images src={Fisik} className="sukmav2__slider-avatar-img" />
      <section className="sukmav2__slider section__padding">
        <div className="sukmav2__slider-content">
          <Statuscard status="Physical Bullying" />
          <Card
            title="Apa itu Bullying Fisik?"
            detail="Bullying fisik adalah tindakan intimidasi yang dilakukan sebagai usaha mengontrol korban dengan kekuatan yang dimiliki pelakunya."
          />
          <Slideaction heart={<AiFillHeart />} />
        </div>
      </section>
    </>
  );
};

export default Slider;
