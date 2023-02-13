import React from "react";
import "./category.css";
import { Cat } from "../../components";
import { Fisik, Sex, Verbal, Cyber } from "../../assets";

const Category = () => {
  const categoryList = [
    {
      title: "Physical Bullying",
      src: Fisik,
      alt: "fisik",
    },
    { title: "Sexual Bullying", src: Sex, alt: "sex" },
    { title: "Cyber Bullying", src: Cyber, alt: "cyber" },
    {
      title: "Verbal Bullying",
      src: Verbal,
      alt: "verbal",
    },
  ];

  return (
    <section className="sukmav2__category section__padding">
      <div className="sukmav2__category-container">
        {categoryList.map((item, index) => (
          <Cat
            key={index}
            title={categoryList[index]["title"]}
            src={categoryList[index]["src"]}
            alt={categoryList[index]["alt"]}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
