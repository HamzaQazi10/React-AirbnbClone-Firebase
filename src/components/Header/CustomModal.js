import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Tooltip, Space, Modal } from "antd";
import { CustomModalStyle } from "./styles/CustomModalStyle";
import { HeadButton } from "../../styles/HeadButton";
import { ModalinButton } from "./styles/ModalinButton";
import AnyweekModal from "./AnyweekModal";
import AnywhereModal from "./AnywhereModal";
import CheckInModal from "./CheckInModal";
import GuestsModal from "./GuestsModal";
import { MdOutlineCancel } from "react-icons/md";
function CustomModal(props) {
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
    props.handleClose();
  };

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
      <CustomModalStyle>
        <div className="modal-wrapper"></div>

        <div className="modal-container">
          <div className="modal-flex">
            <ModalinButton
              onClick={showRegionModal}
              /*               style={{
                fontSize: "2",
                fontWeight: "100",
                backgroundColor: "red",
              }} */
            >
              Where
            </ModalinButton>
            <ModalinButton onClick={showCheckInModal}>Check In</ModalinButton>
            <ModalinButton onClick={showCheckInModal}>Check Out</ModalinButton>
            <ModalinButton className="active" onClick={showGuestsModal}>
              Guests
            </ModalinButton>
            {/*             <ModalinButton onClick={showGuestsModal}>Search</ModalinButton> */}
            {/*             <ModalinButton
              onClick={
                props.handleClose
                //console.log("----Pressed----cancel---");
              }
            >
              Cancel
            </ModalinButton> */}
          </div>
        </div>
        <MdOutlineCancel
          size={20}
          className="cancelBtn"
          onClick={
            props.handleClose
            //console.log("----Pressed----cancel---");
          }
        />
      </CustomModalStyle>
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
    </>
  );
}

export default CustomModal;
