import React, { useState } from "react";
import { HeadButton } from "../../styles/HeadButton";
import { Input, Modal, Button } from "antd";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BiHome, BiHomeHeart, BiDoorOpen } from "react-icons/bi";
import {
  CustomModalCountryWrapper,
  SpaceModalWrapper,
} from "./styles/SpaceModalWrapper";
import CustomModalAmenities from "./CustomModalAmenities";
import {
  GiCampingTent,
  GiFamilyHouse,
  GiSpookyHouse,
  GiTreehouse,
  GiWoodCabin,
  GiCastle,
} from "react-icons/gi";
import { CategoryButton } from "../Navbar/styles/CategoryButton";
import { Category1Button } from "./styles/Category1button";
import { Plusminusbutton } from "./styles/Plusminusbutton";
function CustomModalSpace(props) {
  const price = props.price;
  const [nextBtn, setnextBtn] = useState(false);
  //const [spacetype, setspacetype] = useState(false);
  const [entire, setentire] = useState(false);
  const [private1, setprivate1] = useState(false);
  const [shared, setshared] = useState(false);
  const [spacetype1, setspacetype1] = useState("");

  const [guests, setguests] = useState(1);
  const [bedrooms, setbedrooms] = useState(0);
  const [washrooms, setwashrooms] = useState(0);
  const [kitchens, setkitchens] = useState(0);
  const [childrens, setchildrens] = useState(0);

  const spacetypeprop = props.spacetype;
  console.log("space is ", props.spacetype);
  console.log("space is ////", spacetypeprop);

  const [amenitiesopen, setamenitiesOpen] = useState(false);

  const showamenitiesModal = () => {
    //console.log("space is ---->", props.item);
    setamenitiesOpen(true);
  };

  const handleOk = () => {
    setamenitiesOpen(false);
  };

  const handleamenitiesCancel = () => {
    //console.log("handling the space");
    setamenitiesOpen(false);
    props.handlespaceCancel();
  };
  return (
    <>
      <Modal
        open={props.spaceopen}
        onCancel={props.handlespaceCancel}
        //style={{ zIndex: "1000000" }}
        //style={{ padding: 0, backgroundColor: "red" }}
        width={380}
        footer={[
          <Button
            //           style={{ zIndex: "1000000" }}
            key="next"
            danger
            type="primary"
            onClick={showamenitiesModal}
            disabled={nextBtn}
          >
            Next
          </Button>,
        ]}
      >
        <SpaceModalWrapper>
          <div>
            <h3 className="heading">General Information</h3>
          </div>
          <div className="maincontainer">
            <div className="container1">
              <h3 className="heading2">Guests</h3>
            </div>
            <div className="container2">
              <Plusminusbutton>
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var guest = guests;
                    if (guests == 0) {
                      setguests(0);
                    } else {
                      setguests(guest - 1);
                    }
                  }}
                />
              </Plusminusbutton>
              {/*  <AiOutlineMinusCircle className="minus" /> */}
              <h3 className="heading3">{guests}</h3>
              <Plusminusbutton variant={true}>
                <AiOutlinePlusCircle
                  className="plus"
                  onClick={() => {
                    var guest = guests;
                    setguests(guest + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>

          <div className="maincontainer">
            <div className="container1">
              <h3 className="heading2">BedRooms</h3>
            </div>
            <div className="container2">
              <Plusminusbutton>
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var bedroomz = bedrooms;
                    if (bedrooms == 0) {
                      setbedrooms(0);
                    } else {
                      setbedrooms(bedroomz - 1);
                    }
                  }}
                />
              </Plusminusbutton>
              <h3 className="heading3">{bedrooms}</h3>
              <Plusminusbutton variant={true}>
                <AiOutlinePlusCircle
                  className="plus"
                  onClick={() => {
                    var bedroomz = bedrooms;
                    setbedrooms(bedroomz + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div className="maincontainer">
            <div className="container1">
              <h3 className="heading2">Washrooms</h3>
            </div>
            <div className="container2">
              <Plusminusbutton>
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var guest = washrooms;
                    if (washrooms == 0) {
                      setwashrooms(0);
                    } else {
                      setwashrooms(guest - 1);
                    }
                  }}
                />
              </Plusminusbutton>
              {/*  <AiOutlineMinusCircle className="minus" /> */}
              <h3 className="heading3">{washrooms}</h3>
              <Plusminusbutton variant={true}>
                <AiOutlinePlusCircle
                  className="plus"
                  onClick={() => {
                    var guest = washrooms;
                    setwashrooms(guest + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div className="maincontainer">
            <div className="container1">
              <h3 className="heading2">Kitchens</h3>
            </div>
            <div className="container2">
              <Plusminusbutton>
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var guest = kitchens;
                    if (kitchens == 0) {
                      setkitchens(0);
                    } else {
                      setkitchens(guest - 1);
                    }
                  }}
                />
              </Plusminusbutton>
              {/*  <AiOutlineMinusCircle className="minus" /> */}
              <h3 className="heading3">{kitchens}</h3>
              <Plusminusbutton variant={true}>
                <AiOutlinePlusCircle
                  className="plus"
                  onClick={() => {
                    var guest = kitchens;
                    setkitchens(guest + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div className="maincontainer">
            <div className="container1">
              <h3 className="heading2">Childrens</h3>
            </div>
            <div className="container2">
              <Plusminusbutton>
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var guest = childrens;
                    if (childrens == 0) {
                      setchildrens(0);
                    } else {
                      setchildrens(guest - 1);
                    }
                  }}
                />
              </Plusminusbutton>
              {/*  <AiOutlineMinusCircle className="minus" /> */}
              <h3 className="heading3">{childrens}</h3>
              <Plusminusbutton variant={true}>
                <AiOutlinePlusCircle
                  className="plus"
                  onClick={() => {
                    var guest = childrens;
                    setchildrens(guest + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>

          <div>
            <h3 className="heading">Space Type</h3>
          </div>
          <Category1Button
            onClick={() => {
              setnextBtn(false);
              setentire(!entire);
              setspacetype1("entire");
            }}
            variant={entire}
            type="text"
            style={{
              //border: "1px solid black",
              //borderRadius: "1rem",
              //padding: "5px 1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                //backgroundColor: "red",
              }}
            >
              <p>An Entire Place</p>
              <BiHome size={"2.3rem"} />
            </div>
          </Category1Button>
          <Category1Button
            onClick={() => {
              setnextBtn(false);
              setprivate1(!private1);
              setspacetype1("private");
            }}
            variant={private1}
            type="text"
            style={{
              //border: "1px solid black",
              //borderRadius: "1rem",
              //padding: "5px 1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                //backgroundColor: "red",
              }}
            >
              <p>Private Room</p>
              <BiDoorOpen size={"2.3rem"} />
            </div>
          </Category1Button>
          <Category1Button
            onClick={() => {
              setnextBtn(false);
              setshared(!shared);
              setspacetype1("shared");
            }}
            variant={shared}
            type="text"
            style={{
              //border: "1px solid black",
              //borderRadius: "1rem",
              //padding: "5px 1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                //backgroundColor: "red",
              }}
            >
              <p>Shared Place</p>
              <BiHomeHeart size={"2.3rem"} />
            </div>
          </Category1Button>
        </SpaceModalWrapper>
      </Modal>
      {amenitiesopen && (
        <CustomModalAmenities
          amenitiesopen={amenitiesopen}
          //stayType={camp}
          //handlehomeClose={handlehomeClose}
          /* entire={entire}
          private1={private1}
          shared={shared} */
          price={price}
          spacetypeprop={spacetypeprop}
          spacetype1={spacetype1}
          guests={guests}
          bedrooms={bedrooms}
          washrooms={washrooms}
          kitchens={kitchens}
          childrens={childrens}
          handleamenitiesCancel={handleamenitiesCancel}
        />
      )}
    </>
  );
}

export default CustomModalSpace;
