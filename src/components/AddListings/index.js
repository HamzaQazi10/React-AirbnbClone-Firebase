import React, { useState } from "react";
import CustomModalCountry from "./CustomModalCountry";
import logo from "../../assets/logo/long-logo.png";
import { AddListingsWrapper } from "./styles/AddListingsWrapper";
import { Slider, Button } from "antd";

function AddListings() {
  const [disabled, setDisabled] = useState(false);
  const [price, setprice] = useState(300);
  const [night, setnight] = useState(15);
  /* const onChange = (checked) => {
    setDisabled(checked);
  }; */
  const onChange = (value) => {
    console.log("onChange: ", value);
    //var priceget = price;
    var priceget = 20 * value;
    setprice(priceget);
    setnight(value);
  };
  const [homeopen, sethomeOpen] = useState(false);

  const showhomeModal = () => {
    sethomeOpen(true);
  };

  const handleOk = () => {
    sethomeOpen(false);
  };

  const handlehomeCancel = () => {
    sethomeOpen(false);
  };
  return (
    <>
      {/* <CustomModalCountry /> */}
      <div>
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
          style={{ width: "10rem", marginTop: "2rem", marginLeft: "2rem" }}
        />
      </div>
      <AddListingsWrapper>
        <div className="bg">
          {/*           <img
            //src="https://a0.muscache.com/im/pictures/a64a22fa-6262-4f36-8a40-bb0300a6bba3.jpg?im_w=720"
            //src="https://th.bing.com/th?id=OIP.my9mqMjjU05hevBrgYNTIgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            src="https://mcdn.wallpapersafari.com/medium/40/41/E4lzGs.jpg"
            className="img"
          /> */}
        </div>
        <div className="container">
          <div className="centrealign">
            <h2 className="airbnb">Airbnb it.</h2>
            <h2 className="earn">You could earn</h2>
            <h1>${price}</h1>
            <div className="inner">
              <h3 style={{ textDecoration: "underline", fontWeight: "bold" }}>
                {night} night
              </h3>
              <h3
                style={{
                  color: "gray",
                  marginLeft: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                at the price of 20$
              </h3>
            </div>
            <Slider
              //style={{ color: "black", backgroundColor: "black" }}
              defaultValue={15}
              disabled={disabled}
              max={30}
              min={1}
              railStyle={{ backgroundColor: "lightgray" }}
              trackStyle={{
                color: "black",
                backgroundColor: "black",
                boxShadow: "0 0 0 0 4px black",
              }}
              handleStyle={{ backgroundColor: "black", color: "black" }}
              onChange={onChange}
              //onAfterChange={onAfterChange}
            />
            <Button type="primary" danger onClick={showhomeModal}>
              Get Started
            </Button>
          </div>
        </div>
      </AddListingsWrapper>
      {homeopen && (
        <CustomModalCountry
          homeopen={homeopen}
          price={price}
          //handlehomeClose={handlehomeClose}
          handlehomeCancel={handlehomeCancel}
        />
      )}
    </>
  );
}

export default AddListings;
