import React from "react";
import mini from "../../../Images/mini_black.png";
import rainbow from "../../../Images/rainbow.png";
import stock from "../../../Images/stock.png";
import fire from "../../../Images/fire.png";
import "./Hoomework.scss";
const Hoomework = () => {
  const cloth = [
    {
      pic: stock,
      title: "Liquor Store Cloting",
      para: "E-Commerce  /.  Website  /.  Systems  /.  Digital Marketing  /. Art Direction",
    },
    {
      pic: rainbow,
      title: "The Caddy",
      para: "Application Design  /.  Augmented Reality  /.  UX Design  /.  UI Design  /.  Virtual Reality",
    },
    {
      pic: fire,
      title: "Football Alarm Clock",
      para: "Application Design  /.  Progressive Technology  /.  UI Design  /.  Sound and Media",
    },
  ];

  return (
    <>
      <div className="our_work_container">
        <div className="main_work">
          <div className="main_min_title">
            <div>
              <img src={mini} />
            </div>
            <div className="title_text">Our Work</div>
          </div>

          <div className="work_title">Success Stories</div>

          <div className="main_cloth_card">
            {cloth.map((e) => {
              return (
                <div className="cloth_card">
                  <img src={e.pic} />
                  <div className="cloth_title">{e.title}</div>
                  <div className="cloth_para">{e.para}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hoomework;
