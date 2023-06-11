import React, { useState } from "react";
import { Modal, Button } from "antd";
import { HeadButton } from "../../styles/HeadButton";
import { ModalinButton } from "./styles/ModalinButton";
import { RegionBtn } from "./styles/RegionBtn";
function AnyweekModal(props) {
  const [region, setRegion] = useState("");

  return (
    <>
      <Modal
        /* style={{ position: "relative", backgroundColor: "red" }} */
        open={props.Regionopen}
        title="Location"
        onCancel={props.RegionhandleCancel}
        //style={{ zIndex: "1000000" }}
        footer={[
          <Button
            //           style={{ zIndex: "1000000" }}
            key="back"
            danger
            onClick={props.handleCancel}
          >
            Save
          </Button>,
        ]}
      >
        <div>
          <p>Select Region</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              //zIndex: "100000",
              //backgroundColor: "red",
            }}
          >
            <div style={{ display: "block" }}>
              <RegionBtn>
                <img
                  //src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                  src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                  style={{
                    width: "100%",
                    borderRadius: "1rem",
                    //height: "140px",
                  }}
                />
              </RegionBtn>
              <p>I'm flexible</p>
            </div>
            <div style={{ paddingLeft: "1rem" }}></div>
            <div style={{ display: "block" }}>
              <RegionBtn>
                <img
                  src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                  style={{ width: "100%", borderRadius: "1rem" }}
                />
              </RegionBtn>
              <p>Europe</p>
            </div>
            <div style={{ paddingLeft: "1rem" }}></div>
            <div style={{ display: "block" }}>
              <RegionBtn>
                <img
                  src="https://a0.muscache.com/im/pictures/e1a36727-5064-4ba7-a870-4f9fec72def7.jpg?im_w=320"
                  style={{ width: "100%", borderRadius: "1rem" }}
                />
              </RegionBtn>
              <p>US</p>
            </div>
          </div>

          {/*           <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "2.3rem",
            }}
          >
            <p style={{ marginRight: "3rem", backgroundColor: "red" }}>
              I'm flexible
            </p>
            <p>Europe</p>
            <p>UAE</p>
          </div> */}

          <HeadButton />
        </div>
      </Modal>
    </>
  );
}

export default AnyweekModal;
