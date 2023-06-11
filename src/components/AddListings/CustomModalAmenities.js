import React, { useState, useContext } from "react";
import { HeadButton } from "../../styles/HeadButton";
import { Input, Modal, Button } from "antd";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { FaSwimmingPool, FaHotTub } from "react-icons/fa";
import { RiWifiFill } from "react-icons/ri";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { CustomModalAmenitiesWrapper } from "./styles/CustomModalAmenitiesWrapper";
import { CategoryButton } from "../Navbar/styles/CategoryButton";
import { CountContext } from "../../App";
import { NavLink } from "react-router-dom";
function CustomModalAmenities(props) {
  const countContext = useContext(CountContext);
  console.log("count is ---", countContext.countState);
  const [data1, setdata1] = useState(countContext.countState);
  console.log("count is -3-3-", data1.length);
  const [nextBtn, setnextBtn] = useState(false);
  const [nextBtn1, setnextBtn1] = useState(true);
  const camp = false;
  const family = false;
  const [wifi, setwifi] = useState(false);
  const [parking, setparking] = useState(false);
  const [ac, setac] = useState(false);
  const [grill, setgrill] = useState(false);
  const [washer, setwasher] = useState(false);
  const [hottub, sethottub] = useState(false);
  const t1 = {
    id: data1.length,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a155c0d8-b957-497f-8d36-ac60b1c47776.jpeg?im_w=720",
    price: props.price,
    space: props.spacetype1,
    country: "Australia",
    city: "Sydney",
    kitchen: 4,
    parking: parking,
    wifi: wifi,
    ac: ac,
    grill: grill,
    washer: washer,
    hottub: hottub,
    adults: 3,
    children: 3,
    infants: 3,
    pets: 3,
  };
  //setdata1(data1.push(t1))
  const handleit = () => {
    setnextBtn1(false);
    countContext.countDispatch({ type: "increment", value: t1 });
  };
  //console.log("data is ",props.spacetype1," ",props.guests," ",props.childrens," ",props.spacetypeprop);
  //console.log("space is ", props.stayType);
  return (
    <>
      <Modal
        open={props.amenitiesopen}
        onCancel={props.handleamenitiesCancel}
        //style={{ zIndex: "1000000" }}
        //style={{ padding: 0, backgroundColor: "red" }}
        width={380}
        footer={[
          /*           <Button
            //           style={{ zIndex: "1000000" }}
            key="next"
            danger
            type="primary"
            onClick={props.handlespaceCancel}
            disabled={nextBtn}
          >
            Done
          </Button>, */
          <Button
            //           style={{ zIndex: "1000000" }}
            key="next1"
            danger
            type="primary"
            onClick={handleit}
            disabled={nextBtn}
          >
            Save
          </Button>,
          <Button
            //           style={{ zIndex: "1000000" }}
            key="next2"
            danger
            type="primary"
            //onClick={}
            disabled={nextBtn1}
          >
            <NavLink to="/">Post</NavLink>
          </Button>,
        ]}
      >
        <CustomModalAmenitiesWrapper>
          <div className="heading">
            <h3>Select the Amenities</h3>
          </div>
          <div className="flexstyle">
            <CategoryButton
              variant={wifi}
              onClick={() => {
                setwifi(!wifi);
                setnextBtn(false);
              }}
            >
              <RiWifiFill size="5rem" />
              <p>Wifi</p>
            </CategoryButton>
            <CategoryButton
              variant={parking}
              onClick={() => {
                setparking(!parking);
                setnextBtn(false);
              }}
            >
              <AiOutlineCar size="4rem" />
              <p>Parking</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
          <div className="flexstyle">
            <CategoryButton
              variant={ac}
              onClick={() => {
                setac(!ac);
                setnextBtn(false);
              }}
            >
              <FaSwimmingPool size="5rem" />
              <p>AC</p>
            </CategoryButton>
            <CategoryButton
              variant={grill}
              onClick={() => {
                setgrill(!grill);
                setnextBtn(false);
              }}
            >
              <MdOutlineOutdoorGrill size="5rem" />
              <p>Grill</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
          <div className="flexstyle">
            <CategoryButton
              variant={washer}
              onClick={() => {
                setwasher(!washer);
                setnextBtn(false);
              }}
            >
              <GiWashingMachine size="4rem" />
              <p>Washer</p>
            </CategoryButton>
            <CategoryButton
              variant={hottub}
              onClick={() => {
                sethottub(!hottub);
                setnextBtn(false);
              }}
            >
              <FaHotTub size="4rem" />
              <p>HotTub</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
        </CustomModalAmenitiesWrapper>
      </Modal>
    </>
  );
}

export default CustomModalAmenities;
