import React from "react";
import black_arrow_btn from "../../Images/black_arrow_btn.png";
import bitmap from "../../Images/Bitmap.png";
import person from "../../Images/person.png";

const array = [
  {
    name: "Cameron",
    title: "Technical Director",
    para: "Aaron has been designing brands, websites, applications, and media for the past 18 years. With a keen eye for detail Aaron has worked with top tier companies such as Jaguar Land Rover and the BBC to create bespoke experiences for customers world wide. ",
    list1: "Augmented Reality",
    list2: "Progressive Web Apps",
    list3: "E-Commerce",
    list4: "Mobile Applications",
    list5: "Project Management ",
    span: "/.",
  },
  {
    name: "Aaron",
    title: "Creative Director",
    para: "Aaron has been designing brands, websites, applications, and media for the past 18 years. With a keen eye for detail Aaron has worked with top tier companies such as Jaguar Land Rover and the BBC to create bespoke experiences for customers world wide. ",
    list1: "Art Direction",
    list2: "Brand Design",
    list3: "User Experience Design",
    list4: "User Interface Design",
    list5: "Typography ",
    span: "/.",
  },
  {
    name: "Dan",
    title: "UX Designer",
    para: "Aaron has been designing brands, websites, applications, and media for the past 18 years. With a keen eye for detail Aaron has worked with top tier companies such as Jaguar Land Rover and the BBC to create bespoke experiences for customers world wide. ",
    list1: "User Experience Design",
    list2: "User Interface Design",
    list3: "Systems Management",
    span: "/.",
  },
];

const Featured_sec3 = () => {
  return (
    <div className="featured_sec3">
      <div className="sec3_top">
        <img src={black_arrow_btn} alt="" />
        <span>Our Process</span>
        <div className="sec3_h">
          <h1>Data Informed Designers</h1>
        </div>
        <div className="sec3_p_1">
          <p>
            Our mission is to create intuitive, simple, and elegant design
            solutions that use progressive technology in mobile and web
            development.
          </p>
        </div>
        <div className="sec3_award">
          <img src={bitmap} alt="" />
          <span>
            UK App Awards 2022 <br />
            /. Nominee
          </span>
        </div>
        <div className="sec3_p_2">
          <p>
            Our small team has been designing digital products together since
            2009. We have since had the privelage of working with global brands
            as well as inspiring start-ups. We focus on how technology and brand
            can combine to create optimal product solutions.
          </p>
        </div>
        <div className="sec3_cards">
          {array.map((elem, index) => {
            const {
              name,
              title,
              para,
              list1,
              list2,
              list3,
              list4,
              list5,
              span,
            } = elem;
            return (
              <>
                <div
                  className={
                    index === 0
                      ? "sec3_card sec3_c_1"
                      : index === 1
                      ? "sec3_card sec3_c_2"
                      : index === 2
                      ? "sec3_card sec3_c_3"
                      : ""
                  }
                >
                  <div className="person">
                    <img src={person} alt="" />
                  </div>
                  <div className="person_detail">
                    <h1>{name} </h1>
                    <h2>{title}</h2>
                    <p>{para}</p>

                    <li>
                      <span>{span} </span> {list1}
                    </li>
                    <li>
                      <span>{span} </span> {list2}
                    </li>
                    <li>
                      <span>{span} </span> {list3}
                    </li>
                    <li>
                      <span>{span} </span> {list4}
                    </li>
                    <li>
                      <span>{span} </span> {list5}
                    </li>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured_sec3;
