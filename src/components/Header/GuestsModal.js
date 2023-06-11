import React, { useState, useContext } from "react";
import { Modal, Button } from "antd";
import { HeadButton } from "../../styles/HeadButton";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { SearchContext } from "../../App";
import { Plusminusbutton } from "../AddListings/styles/Plusminusbutton";
function GuestsModal(props) {
  const [adults, setadults] = useState(0);
  const [children, setchildren] = useState(0);
  const [infants, setinfants] = useState(0);
  const [pets, setpets] = useState(0);
  const countContext = useContext(SearchContext);
  console.log("countContext from GuestsModal is ---", countContext.countState);
  const [data1, setdata1] = useState(countContext.countState);

  console.log(
    "countContext from GuestsModal data1 state is assigned---",
    data1
  );
  const region = data1[0].region;
  console.log("Region in CheckinModal is ", region);
  const checkin = data1[0].checkin;
  console.log("checkin in CheckinModal is ", checkin);
  const checkout = data1[0].checkout;
  console.log("checkout in CheckinModal is ", checkout);
  /*   const canceled = () => {
    props.handleGuestsCancel();
  }; */
  return (
    <>
      <Modal
        /* style={{ position: "relative", backgroundColor: "red" }} */
        open={props.Guestsopen}
        title="Guests"
        onCancel={props.GuestshandleCancel}
        //style={{ borderRadius: "44rem", backgroundColor: "red" }}
        footer={[
          /*           <Button
            key="save"
            danger
            onClick={countContext.countDispatch({
              type: "increment",
              value: {
                region: region,
                checkin: checkin,
                checkout: checkout,
                adults: "23012",
              },
            })}
          >
            Save
          </Button>, */
          <Button
            key="back"
            danger
            onClick={() => {
              props.handleGuestsCancel();
              countContext.countDispatch({
                type: "increment",
                value: {
                  region: region,
                  checkin: checkin,
                  checkout: checkout,
                  adults: adults,
                  children: children,
                  infants: infants,
                  pets: pets,
                },
              });
            }}
          >
            Search
          </Button>,
        ]}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontweight: "bolder", fontSize: "2rem" }}>
                Adults
              </div>
              <p style={{ fontSize: "1.2rem" }}>Above 13</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Plusminusbutton
                variant={false}
                style={{ position: "relative", top: "-10% ", left: "-10%" }}
              >
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var count = adults;
                    if (adults == 0) {
                      setadults(0);
                    } else {
                      setadults(adults - 1);
                    }
                    //setadults(count - 1);
                  }}
                />
              </Plusminusbutton>
              <h3 className="heading3" style={{ top: "10%" }}>
                {adults}
              </h3>
              <Plusminusbutton
                variant={true}
                className="plus"
                style={{ position: "relative", top: "-10%", left: "10%" }}
              >
                <AiOutlinePlusCircle
                  onClick={() => {
                    var count = adults;
                    setadults(adults + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontweight: "bolder", fontSize: "2rem" }}>
                Children
              </div>
              <p style={{ fontSize: "1.2rem" }}>Under 13</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Plusminusbutton
                variant={false}
                style={{ position: "relative", top: "-10% ", left: "-10%" }}
              >
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var count = children;
                    if (children == 0) {
                      setchildren(0);
                    } else {
                      setchildren(children - 1);
                    }
                    //setadults(count - 1);
                  }}
                />
              </Plusminusbutton>
              <h3 className="heading3" style={{ top: "10%" }}>
                {children}
              </h3>
              <Plusminusbutton
                variant={true}
                className="plus"
                style={{ position: "relative", top: "-10%", left: "10%" }}
              >
                <AiOutlinePlusCircle
                  onClick={() => {
                    var count = children;
                    setchildren(children + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontweight: "bolder", fontSize: "2rem" }}>
                Infants
              </div>
              <p style={{ fontSize: "1.2rem" }}>Under 2</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Plusminusbutton
                variant={false}
                style={{ position: "relative", top: "-10% ", left: "-10%" }}
              >
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var count = infants;
                    if (infants == 0) {
                      setinfants(0);
                    } else {
                      setinfants(infants - 1);
                    }
                    //setadults(count - 1);
                  }}
                />
              </Plusminusbutton>
              <h3 className="heading3" style={{ top: "10%" }}>
                {infants}
              </h3>
              <Plusminusbutton
                variant={true}
                className="plus"
                style={{ position: "relative", top: "-10%", left: "10%" }}
              >
                <AiOutlinePlusCircle
                  onClick={() => {
                    var count = infants;
                    setinfants(infants + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontweight: "bolder", fontSize: "2rem" }}>Pets</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Plusminusbutton
                variant={false}
                style={{ position: "relative", top: "-10% ", left: "-10%" }}
              >
                <AiOutlineMinusCircle
                  className="minus"
                  onClick={() => {
                    var count = pets;
                    if (pets == 0) {
                      setpets(0);
                    } else {
                      setpets(pets - 1);
                    }
                    //setadults(count - 1);
                  }}
                />
              </Plusminusbutton>
              <h3 className="heading3" style={{ top: "10%" }}>
                {pets}
              </h3>
              <Plusminusbutton
                variant={true}
                className="plus"
                style={{ position: "relative", top: "-10%", left: "10%" }}
              >
                <AiOutlinePlusCircle
                  onClick={() => {
                    var count = pets;
                    setpets(pets + 1);
                  }}
                />
              </Plusminusbutton>
            </div>
          </div>
          {/*           <Button
            danger
            onClick={() => {
              //setpets(pets + 1);
              countContext.countDispatch({
                type: "increment",
                value: {
                  region: region,
                  checkin: checkin,
                  checkout: checkout,
                  adults: adults,
                  children: children,
                  infants: infants,
                  pets: pets,
                },
              });
              //    props.GuestshandleCancel();
            }}
          >
            Save
          </Button> */}

          <HeadButton />
        </div>
      </Modal>
    </>
  );
}

export default GuestsModal;
