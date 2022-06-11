import React from "react";
import arrowbtn from "../../Images/arrowbtn.png";

const Featured_sec2 = () => {
  return (
    <div className="featured_sec2_main">
      <div className="sec2_top">
        <img src={arrowbtn} alt="" />
        <span>Our Process</span>
      </div>
      <p className="sec2para">
        We believe that flexibility and momentum are key to a successfull
        project. We use process as a guideline to create digital first designs
        that work for you.
      </p>
      <div className="card_1_2">
        <div className="sec2_card sec2_card_1 ">
          <span className="card_no">01</span>
          <div className="card_h_P">
            <h1>Define</h1>
            <p>
              Defining the project is key to understanding how we should target
              our resources to secure the best outcome possible. At this point
              we need to make sure there is a full understanding of
              expectations, budget, and outcome. Our methodology will flex
              depending on the needs and scope of each project we undertake.
            </p>
          </div>
        </div>
        <div className="sec2_card sec2_card_2 ">
          <span className="card_no">02</span>
          <div className="card_h_P">
            <h1>Design</h1>
            <p>
              We segregate design into two major factors. The design of visible
              elements shares an importance with the product design that goes on
              in the background. <br />
              <br />
              At Hoome we approach each project from both viewpoints
              simultaneously. This enables us to consider both technology and
              visual design to make sure our outcomes look great and work well.
            </p>
          </div>
        </div>
      </div>

      <h1 className="cards_mid_h">
        Fall in love with the process & the results will follow
      </h1>

      <div className="card_3_4">
        <div className="sec2_card sec2_card_3 ">
          <span className="card_no">03</span>
          <div className="card_h_P">
            <h1>Refine</h1>
            <p>
              We don’t work alone. We work with our clients to make sure that
              designs are reviewed and refined throughout the journey to
              delivery. <br />
              <br />
              Although we are proud of what we do, it’s not all about us -
              ultimately our clients are in control, and refinement is a key
              process in keeping focus on the task in hand.
            </p>
          </div>
        </div>
        <div className="sec2_card sec2_card_4 ">
          <span className="card_no">04</span>
          <div className="card_h_P">
            <h1>Deliver</h1>
            <p>
              An idea is only as good as its execution. We deliver solutions
              that have a positive impact on your business.
              <br /> <br />
              Testing is key to succesfully delivery. Making sure everything we
              build works exactly how it was defined is an important factor of
              the whole process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_sec2;
