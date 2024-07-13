import "./nav.css";
import React from "react";
import "../Components/hero.css";

const Hero = () => {
  const myStyle = {
    "max-width": "1240px",
    height: "350px",
  };
  const myStyle1 = {
    "max-width": "1240px",
    height: "200px",
  };
  return (
    <>
      <div class="card mb-3" style={myStyle}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="nothing.png"
              class="img-fluid rounded-start"
              alt="nothing-phone"
              height={400}
              width={350}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">YOUR HAND DESERVE THE BEST</h5>
              <p class="card-text">
                "Stay Connected, Stay Ahead – Experience Innovation with NOTHING
                Phones."
              </p>
              <p class="card-text">
                <small class="text-body-secondary">Available On</small>
                <div className="brand-logo">
                  <a
                    href="https://www.amazon.in/s?k=nothing+phone+2a&crid=1OX33JH0QN7KC&sprefix=nothing+phine+%2Caps%2C305&ref=nb_sb_ss_pltr-data-refreshed_2_14"
                    target="blank"
                  >
                    <img
                      className="amazon"
                      src="amazon.png"
                      alt="amazon-logo"
                    />
                  </a>
                  <a
                    href="https://www.flipkart.com/search?q=nothing%20phone%202a&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
                    target="blank"
                  >
                    <img
                      className="flipkart"
                      src="flipkart.png"
                      alt="flipkart-logo"
                    />
                  </a>
                </div>
              </p>
              <div>
                <button className="but">
                  <a
                    className="shop"
                    href="https://www.flipkart.com/nothing-phone-2a-5g-black-128-gb/p/itm85c6bca5edadc?pid=MOBGVMQSZWSCFFWT&lid=LSTMOBGVMQSZWSCFFWTLEUOV6&marketplace=FLIPKART&q=nothing+phone+2a&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=db174844-4287-417e-b969-2011ae9958f8.MOBGVMQSZWSCFFWT.SEARCH&ppt=sp&ppn=sp&qH=83d66aff395f669f"
                    target="blank"
                  >
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nextcard */}
      <div class="card mb-3" style={myStyle1}>
        <div class="row m-1 g-0">
          <div class="col-md-4">
            <img
              src="nothing.jpg"
              class="img-fluid rounded-start"
              alt="nothing-phone"
              width={300}
              height={100}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                Custom Mediatek Dimensity 7200 Pro Processor
              </h5>
              <p class="card-text">
                Phone (2a) is fuelled by the custom Dimesity 7200 Pro chipset.
                Co-engineered between Nothing and MediaTek to deliver the best
                performance with optimal power consumption. Do more whilst using
                less thanks to game-changing efficiency from the 8-core 4nm TSMC
                2nd Generation process, with clocking speeds of up to 2.8 GHz
                for multi-tasking to the max. Plus get up to 20 GB RAM with 8 GB
                RAM Booster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
