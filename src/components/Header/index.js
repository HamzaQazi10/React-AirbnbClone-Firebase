import React, { useState, useEffect } from "react";
import logo from "../../assets/logo/long-logo.png";
import { LogoHead } from "./styles/LogoHead";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Tooltip, Space, Modal } from "antd";
import { FaBars } from "react-icons/fa";
import { HeadButton } from "../../styles/HeadButton";
import Navbar from "../Navbar";
import ItemSection from "../ItemSection";
import AnywhereModal from "./AnywhereModal";
import AnyweekModal from "./AnyweekModal";
import CustomModal from "./CustomModal";
import SignupModal from "./SignupModal";
import axios from "axios";
import AddListings from "../AddListings";
import { NavLink } from "react-router-dom";
import SignupModalMobile from "./SignupModalMobile";
import CheckInModal from "./CheckInModal";
import GuestsModal from "./GuestsModal";
function Header({ displayed }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [homeopen, sethomeOpen] = useState(false);
  /* ----------BELOW IS THE CODE FOR SIGNUP MODAL AND -------- */

  const showhomeModal = () => {
    console.log("....Home Modal..........");
    //setGuestsTitle("Anywhere");
    sethomeOpen(true);
  };
  const homehandleClose = () => {
    console.log("---------------->p");
    sethomeOpen(false);
  };
  const handlehomeCancel = () => {
    sethomeOpen(false);
  };
  const [homemobileopen, sethomemobileOpen] = useState(false);

  const showhomeModalmobile = () => {
    console.log("....Home Modal..........");
    //setGuestsTitle("Anywhere");
    sethomemobileOpen(true);
  };
  const homemobilehandleClose = () => {
    console.log("---------------->p");
    sethomemobileOpen(false);
  };
  const handlehomemobileCancel = () => {
    sethomemobileOpen(false);
  };
  const [apiRes, setapiRes] = useState(null);
  const [title, setTitle] = useState("Anywhere");
  const [image, setimage] = useState(
    "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a155c0d8-b957-497f-8d36-ac60b1c47776.jpeg?im_w=720"
  );

  const showModal = () => {
    setTitle("Anywhere");
    setOpen(true);
  };
  const handleClose = () => {
    console.log("---------------->p");
    setOpen(false);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  /* 
  const handleCancel = () => {
    setOpen(false);
  }; */

  const showModalWeek = () => {
    console.log("pressed");
    setTitle("Anyweek");
    setOpen(true);
  };
  /* ---------VARIABLES AND MEHODS FOR REGION MODAL------------- */
  const [Regionopen, setRegionOpen] = useState(false);
  const [Regiontitle, setRegionTitle] = useState("Anywhere");

  const showRegionModal = () => {
    console.log("....Region Modal..........");
    setRegionTitle("Anywhere");
    setRegionOpen(true);
    console.log("region Open", Regionopen);
  };
  const RegionhandleClose = () => {
    console.log("---------------->p");
    setRegionOpen(false);
    setCheckInOpen(true);
  };
  const handleCancel = () => {
    setRegionOpen(false);
    setCheckInOpen(true);
  };
  /* ---------VARIABLES AND MEHODS FOR GUEST MODAL------------- */
  const [Guestsopen, setGuestsOpen] = useState(false);
  const [Gueststitle, setGuestsTitle] = useState("Anywhere");

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
    //props.handleClose();
  };
  /* ---------VARIABLES AND MEHODS FOR CHECK IN MODAL------------- */
  const [CheckInopen, setCheckInOpen] = useState(false);
  const [CheckIntitle, setCheckInTitle] = useState("Anywhere");

  const showCheckInModal = () => {
    console.log("....Guests Modal..........");
    setCheckInTitle("Anywhere");
    setCheckInOpen(true);
  };
  const CheckInhandleClose = () => {
    console.log("---------------->p");
    setCheckInOpen(false);
    setGuestsOpen(true);
  };
  const handleCheckInCancel = () => {
    setCheckInOpen(false);
    setGuestsOpen(true);
  };

  return (
    <>
      <LogoHead>
        <div className="navbar">
          <img src={logo} alt="logo" className="navbar-logo" />
          <div className="search-bar">
            <div className="search-bar-text">
              <HeadButton onClick={showModal}>Anywhere</HeadButton>
            </div>
            <div className="search-bar-text1">
              <HeadButton onClick={showModalWeek}>Anyweek</HeadButton>
            </div>
            <div className="search-bar-text2">Add guests</div>
            <div className="search-icon-div">
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<SearchOutlined />}
              />
            </div>
          </div>
          <div className="profile-container">
            {/*           <div className="airbnb-your-home">Airbnb your home</div>
          <div className="airbnb-your-home">
            <LanguageIcon sx={{ fontSize: "1.3rem" }} />
          </div> */}
            {/*             <div className="yourhome">
              <HeadButton variant="bg" onClick={() => <AddListings />}>
                Your Home
              </HeadButton>
            </div> */}
            <div className="profile-div">
              <div>
                <Space>
                  <Button
                    type="primary"
                    style={{ background: "grey" }}
                    shape="circle"
                    icon={<UserOutlined />}
                  />
                  {/* <NavLink to="/add">
                   */}{" "}
                  <Button
                    type="primary"
                    style={{ background: "white", color: "grey" }}
                    shape="circle"
                    icon={<FaBars />}
                    onClick={showhomeModal} //here I have to start
                    //target={<AddListings />}
                  />
                </Space>
              </div>
            </div>
          </div>
          {/*       <MobileSearchBar />
      <SimpleBottomNavigation /> */}
        </div>
        {/* ----------------------------------------BELOW THE CODE IS FOR HEADER SECTION IN MOBILE VIEW--------------------------------- */}

        {/* ----------------------BELOW THE CODE IS FOR SEARCH IN HEADER SECTION IN MOBILE VIEW------------------- */}
        {/*Have to wrap in NAVLINK */}
        <div className="search-bar-mobile">
          <div className="search-bar-radius-mobile" onClick={showRegionModal}>
            <div className="search-bar-radius-content-mobile">
              <Button
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                style={{ backgroundColor: "white", color: "black" }}
                onClick={showRegionModal}
              />

              <div className="search-bar-radius-text-mobile">
                <div className="Anywhere-mobile">Anywhere</div>
                <div className="Anyweek-mobile">Anyweek . Guests</div>
              </div>
            </div>
            {/*     <h1>hhhh</h1> */}
          </div>
        </div>

        {/* ----------------------BELOW THE CODE IS FOR USER SECTION IN HEADER------------------- */}
        <div className="profile-div-mobile">
          <div className="profile-internal-div">
            <Space>
              <div className="profile-internal-div-1">
                <Button
                  type="default"
                  //style={{ background: "grey" }}
                  size="large"
                  className="UserProfileButton"
                  shape="circle"
                  icon={<UserOutlined />}
                  onClick={showhomeModalmobile} //here I have to start
                />
                <div className="profile-internal-div-1-part">Profile</div>
              </div>
            </Space>
            <Space>
              <div className="profile-internal-div-1">
                <Button
                  type="default"
                  shape="circle"
                  icon={<SearchOutlined />}
                  size="large"
                  className="search-BTN-Mobile"
                />
                <div className="profile-internal-div-1-part">Explore</div>
              </div>
            </Space>
          </div>
        </div>
      </LogoHead>
      {/*      <Navbar /> */}
      {displayed ? <Navbar /> : <p></p>}
      {/* 
      ONLY SHOWS THE NAVBAR IF PROP DISPLAYED IS PASSED
      THIS PROP IS REQUIRED AS NAVBAR IS CALLED INSIDE THE HEADER SECTION
         */}

      {open && (
        <CustomModal
          open={open}
          loading={loading}
          handleClose={handleClose}
          title={title}
        />
      )}
      {homeopen && (
        <SignupModal
          homeopen={homeopen}
          homehandleClose={homehandleClose}
          handlehomeCancel={handlehomeCancel}
        />
      )}
      {homemobileopen && (
        <SignupModalMobile
          homemobileopen={homemobileopen}
          homemobilehandleClose={homemobilehandleClose}
          handlehomemobileCancel={handlehomemobileCancel}
          homehandleClose={homehandleClose}
          handlehomeCancel={handlehomeCancel}
        />
      )}
      {Regionopen && (
        <AnywhereModal
          Regionopen={Regionopen}
          RegionhandleClose={RegionhandleClose}
          Regiontitle={Regiontitle}
          handleCancel={handleCancel}
        />
      )}
      {CheckInopen && (
        <CheckInModal
          CheckInopen={CheckInopen}
          CheckInhandleClose={CheckInhandleClose}
          CheckIntitle={CheckIntitle}
          handleCheckInCancel={handleCheckInCancel}
        />
      )}
      {Guestsopen && (
        <GuestsModal
          Guestsopen={Guestsopen}
          GuestshandleClose={GuestshandleClose}
          Gueststitle={Gueststitle}
          handleGuestsCancel={handleGuestsCancel}
        />
      )}

      {/*       <AnyweekModal
        open={openWeek}
        loading={loadingWeek}
        handleCancel={handleCancelWeek}
      /> */}
    </>
  );
}

export default Header;
