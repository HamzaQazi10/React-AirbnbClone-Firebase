import React from "react";
import { ModalinButton } from "../../styles/ModalinButton";
import { RegionModalStyle } from "./styles/RegionModalStyle";
function RegionModal(props) {
  return (
    <RegionModalStyle>
      {/* <div className="modal-wrapper"></div> */}
      <div className="modal-container">
        <div className="modal-flex">
          <h3>Region</h3>
          <div className="modal-flex-1">
            {/*             <img
              src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
              style={{ width: "30%" }}
            />
            <img
              src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
              style={{ width: "30%" }}
            />
            <img
              src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
              style={{ width: "30%" }}
            /> */}
          </div>
        </div>
      </div>
    </RegionModalStyle>
  );
}
export default RegionModal;
