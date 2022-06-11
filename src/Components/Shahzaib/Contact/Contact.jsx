import React from "react";
import "./Contact.scss";
import mini from "../../../Images/mini_black.png";
import bit from "../../../Images/Bimap.png";
const Contact = () => {
  return (
    <div className="main_contact">
      <div className="contact_left">
        <div className="main_min_title">
          <div>
            <img src={mini} />
          </div>
          <div className="title_text">Contact us</div>
        </div>
        <div className="contact_title">We’re a friendly bunch.</div>
        <div className="contact_list_need">
          <div className="contact_list">
            <div className="list_1">
              <div className="title">Write</div>
              <div className="list_text">
                <div className="left_text">Hoome Holdings</div>
                <div className="left_text">Lichfield Business Village</div>
                <div className="left_text">Staffordshire</div>
                <div className="left_text">Lichfield</div>
                <div className="left_text">WS13 6QG</div>
              </div>
            </div>
            <div className="list_1">
              <div className="title">Email</div>
              <div
                className="list_text"
                style={{ textDecoration: "underline" }}
              >
                hello@hoome.co.uk
              </div>
            </div>
            <div className="list_1">
              <div className="title">Call</div>
              <div
                className="list_text"
                style={{ textDecoration: "underline" }}
              >
                01889 786 638
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_right">
        <img src={bit} />
      </div>
    </div>



  );
};

export default Contact;
