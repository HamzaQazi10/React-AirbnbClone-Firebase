import React, { useState, useContext } from "react";
import { SectionWrapper, SectionWrapperMobile } from "./styles/SectionWrapper";
import Header from "../Header";
import { Button, Image } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaSwimmingPool, FaMedal } from "react-icons/fa";
import { BsDoorClosed } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";
import { BiMedal } from "react-icons/bi";
import { AiOutlineCar, AiFillStar } from "react-icons/ai";
import { GiCampfire } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Offerings from "./Offerings";
import { Category1Button } from "../AddListings/styles/Category1button";
import { DatePicker, Space } from "antd";
import { CategoryButtonGuests } from "./styles/CategoryButtonGuests";
import GuestsModalFilter from "./GuestsModalFilter";
import { CountContext } from "../../App";
import { useParams } from "react-router-dom";
//import useMediaQuery from "./useMediaQuery";
function Section() {
  let Item_id = useParams();
  const countContext = useContext(CountContext);
  const [data1, setdata1] = useState(countContext.countState);
  const [price, setprice] = useState();
  const ItemList = data1.find((p) => p.id == Item_id.id);
  // setprice(ItemList.price);
  console.log("''''''oooooooooooooo", ItemList.price);
  const { RangePicker } = DatePicker;

  const [Guestsopen, setGuestsOpen] = useState(false);
  const [Gueststitle, setGuestsTitle] = useState("Anywhere");

  /*   const isMobile = useMediaQuery("(max-width:992px)");
  console.log("Mobile is       - - - - ", isMobile); */
  const showGuestsModal = () => {
    console.log("....Guests Modal..........");
    setGuestsTitle("Anywhere");
    setGuestsOpen(true);
  };
  const GuestshandleClose = () => {
    console.log("---------------->p");
    setGuestsOpen(false);
  };
  const handleGuestsCancel = () => {
    setGuestsOpen(false);
  };
  return (
    <>
      <SectionWrapper>
        <div className="container-main">
          <div className="container-main-info">
            <div className="container-info">
              <BsDoorClosed size={35} color="#222222" />
              <div className="container-info-part">
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                    fontWeight: "650",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  Self Check In
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgb(113,113,113)",
                  }}
                >
                  Check yourself in with the lockbox.
                </div>
              </div>
            </div>
            <div className="container-info">
              <FaMedal
                size={35}
                //className="badge_btn"
                color="#222222"
                //style={{ padding: "1rem" }}
              />
              <div className="container-info-part">
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                    fontWeight: "650",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  Wendy is SuperHost
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgb(113,113,113)",
                  }}
                >
                  Superhosts are experienced.{" "}
                  {/* highly rated hosts who are
                  committed to providing great stays for guests. */}
                </div>
              </div>
            </div>
            <div className="container-info">
              <FaSwimmingPool size={35} color="#222222" />
              <div className="container-info-part">
                <div
                  style={{
                    fontWeight: "bold",
                    fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                    fontWeight: "690",
                    fontSize: "16px",
                    color: "black",
                  }}
                >
                  Free cancellation for 48 hours
                </div>
              </div>
            </div>
            {/*  <div style={{ color: "red" }}>AirCover</div> */}
            <div className="aircover">
              <h2 style={{ color: "#ff4d4f" }}>air</h2>
              <h2>cover</h2>
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                fontWeight: "400",
                fontSize: "14px",
                color: "rgb(113,113,113)",
              }}
            >
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </div>
            {/*             <p>
              Nothing beats the feeling of spending the night in the great
              outdoors and there is no better way to experience Moab's amazing
              red rock desert. Our brand new Escapod Topo 2 trailers will make
              your camping experience a glamping experience! Especially when you
              get to cuddle up in a cozy queen sized bed with soft sheets,
              pillows, and comforters. Greet the beauty of the red rocks while
              cooking breakfast in our well equipped outdoor kitchen. We deliver
              to your campsite. No need to tow!
            </p> */}
            <Offerings />
          </div>
          <div className="container-sticky">
            <div class="card">
              <div class="header-1">
                <div className="header-1-nested">
                  <div
                    style={{
                      fontWeight: "bold",
                      fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "rgba(34,34,34,1)",
                    }}
                  >
                    ${ItemList.price}{" "}
                  </div>
                  <h3>per night</h3>
                </div>
                <div className="header-1-nested">
                  <h4>5.0</h4>
                  <AiFillStar color="gold" />
                </div>
              </div>

              <div class="container-3">
                <Space
                  direction="vertical"
                  //size={"4rem"}
                  style={{ width: "100%" }}
                >
                  <RangePicker
                    allowEmpty={false}
                    style={{
                      borderColor: "gray",
                      width: "100%",
                      //boxDecorationBreak: "unset",
                    }}
                  />
                </Space>

                <CategoryButtonGuests variant={true} onClick={showGuestsModal}>
                  Guests
                </CategoryButtonGuests>

                <Button
                  htmlType="submit"
                  style={{
                    //margin: "1rem",
                    //marginRight: "1rem",

                    borderRadius: "2rem",
                    width: "100%",
                    marginBottom: "0.5rem",
                  }}
                  key="next1"
                  danger
                  type="primary"
                  /*               onClick={props.handlesignCancel}
                disabled={nextBtn} */
                >
                  Reserve
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* NOW I HAVE TO CREATE A NEW DIV FOR STICKY PART FOR MOBILE SCREEN */}
      </SectionWrapper>
      <SectionWrapperMobile>
        <div className="sticked-mobile">
          <div className="header1-mobile">
            <div className="header-1-mobile">
              <h2>${ItemList.price} </h2>
              <h3>per night</h3>
            </div>
            <Button
              style={{
                borderBlockStyle: "none",
                color: "gray",
                textDecoration: "underline",
              }}
              type="link"
            >
              Choose Dates
            </Button>
          </div>
          <Button
            htmlType="submit"
            style={{
              //margin: "1rem",
              //marginRight: "1rem",

              borderRadius: "2rem",
              width: "20%",
              margin: "1rem",
              alignSelf: "flex-end",
            }}
            key="next1"
            danger
            type="primary"
            /*               onClick={props.handlesignCancel}
          disabled={nextBtn} */
          >
            Reserve
          </Button>
        </div>
      </SectionWrapperMobile>

      {/*         <div class="flexbox-wrapper">
          <div class="regular">This is the regular box</div>
          <div class="sticky">This is the sticky box</div>
        </div> */}
      {Guestsopen && (
        <GuestsModalFilter
          Guestsopen={Guestsopen}
          GuestshandleClose={GuestshandleClose}
          Gueststitle={Gueststitle}
          handleGuestsCancel={handleGuestsCancel}
        />
      )}
    </>
  );
}

export default Section;
