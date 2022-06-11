import React from "react";
import "./Footer.scss";
import Oval from "../../../Images/Oval.png";
import mini from "../../../Images/mini_logo.png";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_main_container_1">
        <div className="footer_container1">
          <div className="footer_content_left">
            <div className="main_min_title">
              <div>
                <img src={mini} />
              </div>
              <div className="title_text">Contact us</div>
            </div>
            <div className="footer_title_talk">Let's Talk</div>

            <div className="footer_service">
              Services Required:
              <div className="service_btn">
                <div className="btn_line_1">
                  <button className="web">Website Design</button>
                  <button className="proj">Product Design</button>
                  <button className="mbl">Mobile App</button>
                </div>
                <div className="btn_line_2">
                  <button className="dev">Development</button>
                  <button className="grap">Graphic Design</button>
                  <button className="ecom">E-Commerce</button>
                </div>
              </div>
            </div>

            <div className="footer_budget">
              Budget:
              <div className="budget_btn">
                <button>2k - 5k</button>
                <button>5k - 10k</button>
                <button>10k - 20k</button>
                <button>20k +</button>
              </div>
            </div>
          </div>

          <div className="footer_content_right">
            <input type="text" placeholder="Your full name" />
            <input type="email" placeholder="Your email address" />
            <input type="text" placeholder="Your message" />
          </div>

          <img className="oval" src={Oval} />
        </div>
      </div>

      <div className="footer_main_container_2">
        <div className="footer_content_2_left">
          <div className="left_text">Hoome Holdings</div>
          <div className="left_text">Lichfield Business Village</div>
          <div className="left_text">Staffordshire</div>
          <div className="left_text">Lichfield</div>
          <div className="left_text">WS13 6QG</div>
        </div>
        <div className="footer_content_2_right">
          <div className="social">
            <div className="social_linK_text">Facebook</div>
            <div className="social_linK_text">Github</div>
            <div className="social_linK_text">Linkedin</div>
          </div>

          <div className="company">
            Company No. 09470477 /. Registered in England and Wales /. Copyright
            © Hoome Holdings
          </div>

          <div className="privacy">Privacy policy /. Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
