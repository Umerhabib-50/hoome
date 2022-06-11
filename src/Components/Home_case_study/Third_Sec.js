import React from "react";
import screen3 from "../../Images/screen_3.png";
import denim from "../../Images/Denim.png";
import black_arrow_btn from "../../Images/black_arrow_btn.png";
import screen_3 from "../../Images/allan-nygren--xvKQuNtOhI-unsplash.png";

const Third_Sec = () => {
  return (
    <div className="third_sec_main">
      <div className="screen1">
        <img src={screen3} alt="" />
      </div>
      <div className="key_feature">
        <span>Key Features</span>
      </div>
      <div className="third_Sec_h_p">
        <h1>
          Bringing the in-store <br /> shopping experience online.
        </h1>
        <p className="para1">
          How did we create a personalised shopping experience, digitally?{" "}
          <br /> <br />
          We don’t work alone, Hoome are collaborative, and in this case we
          worked with a multi-media expert and a marketing expert to create
          bespoke and interactive video guides to buying denim. Giving the
          customer that in-store experience from the comfort of their own home.
        </p>
        <p className="para2">
          We also added a ‘denim finder’ feature. This allows the customer to
          answer a series of questions related to the interactive video guides.
          Once selected, our clever technology filters through thounsands of
          products to offer the customer a refined choice of denim, suitable for
          them.
        </p>
      </div>
      <div className="screen2">
        <img src={denim} alt="" />
        <p>
          “Now, with the right website, I’m able to conduct proper marketing
          accross social media platforms and through Google ads. All in the
          knowledge that conversions will take place, and sales will be made.”
        </p>
        <img className="arrow_btn" src={black_arrow_btn} alt="" />
        <span>Phil Hazel - Owner at Liquor Store Clothing</span>
      </div>
      <div className="screen3">
        <div className="screen3_h_p">
          <h1>The Caddy</h1>
          <p>
            A feature rich mobile application to enable golfers to play better
            using virtual reality, keep score more easily, and track progress at
            courses worldwide.
          </p>
        </div>
        <div className="screen_3">
          <img src={screen_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Third_Sec;
