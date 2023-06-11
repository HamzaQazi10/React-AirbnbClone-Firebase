import React, { useState } from "react";
import { HeadButton } from "../../styles/HeadButton";
import { Input, Modal, Button } from "antd";
import { CustomModalCountryWrapper } from "./styles/CustomCountryModalWrapper";

import {
  GiCampingTent,
  GiFamilyHouse,
  GiSpookyHouse,
  GiTreehouse,
  GiWoodCabin,
  GiCastle,
} from "react-icons/gi";
import { CategoryButton } from "../Navbar/styles/CategoryButton";
import CustomModalSpace from "./CustomModalSpace";
function CustomModalCountry(props) {
  const [nextBtn, setnextBtn] = useState(true);
  const [spacetype, setspacetype] = useState("");
  const [camp, setcamp] = useState(false);
  const [family, setfamily] = useState(false);

  const [spaceopen, setspaceOpen] = useState(false);
  const price = props.price;
  const showspaceModal = () => {
    setspaceOpen(true);
    //props.handlehomeCancel();
  };

  const handleOk = () => {
    setspaceOpen(false);
  };

  const handlespaceCancel = () => {
    //console.log("handling the space");
    setspaceOpen(false);
    props.handlehomeCancel();
  };
  return (
    <>
      <Modal
        open={props.homeopen}
        onCancel={props.handlehomeCancel}
        //style={{ zIndex: "1000000" }}
        //style={{ padding: 0, backgroundColor: "red" }}
        width={350}
        footer={[
          <Button
            //           style={{ zIndex: "1000000" }}
            key="next"
            danger
            type="primary"
            onClick={showspaceModal}
            disabled={nextBtn}
          >
            Next
          </Button>,
        ]}
      >
        <CustomModalCountryWrapper>
          <div>
            <h3 className="container1">Type of Stay You Have</h3>
          </div>

          <div className="flexstyle">
            <CategoryButton
              variant={camp}
              onClick={() => {
                setcamp(!camp);
                setnextBtn(false);
                setspacetype("camp");
              }}
            >
              <GiCampingTent size="4rem" />
              <p>Camp</p>
            </CategoryButton>
            <CategoryButton variant={family} onClick={() => setfamily(!family)}>
              <GiFamilyHouse size="4rem" />
              <p>Family</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
          <div className="flexstyle">
            <CategoryButton>
              <GiSpookyHouse size="4rem" />
              <p>Hotel</p>
            </CategoryButton>
            <CategoryButton>
              <GiTreehouse size="4rem" />
              <p>Tree</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
          <div className="flexstyle">
            <CategoryButton>
              <GiWoodCabin size="4rem" />
              <p>Wood</p>
            </CategoryButton>
            <CategoryButton>
              <GiCastle size="4rem" />
              <p>Castle</p>
            </CategoryButton>
            {/* <h6>Tent</h6> */}
          </div>
        </CustomModalCountryWrapper>
      </Modal>
      {spaceopen && (
        <CustomModalSpace
          spaceopen={spaceopen}
          spacetype={spacetype}
          price={price}
          //handlehomeClose={handlehomeClose}
          handlespaceCancel={handlespaceCancel}
        />
      )}
    </>
  );
}

export default CustomModalCountry;
