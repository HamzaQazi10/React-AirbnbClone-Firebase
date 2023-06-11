import React, { useState } from "react";
import { Modal, Button } from "antd";
import { HeadButton } from "../../styles/HeadButton";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
function GuestsModalFilter(props) {
  const [region, setRegion] = useState("");

  return (
    <>
      <Modal
        style={{ left: "20%", top: "35%" }}
        open={props.Guestsopen}
        title="Location"
        onCancel={props.GuestshandleCancel}
        footer={[
          <Button key="back" danger onClick={props.handleGuestsCancel}>
            Return
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
              <h3 style={{ fontweight: "bolder", fontSize: "2rem" }}>Adults</h3>
              <p style={{ fontSize: "1.2rem" }}>Above 13</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <AiOutlineMinusCircle
                style={{
                  position: "relative",
                  top: "10%",
                  left: "-10%",
                }}
              />
              <h3 style={{ padding: "0 10px" }}>0</h3>
              <AiOutlinePlusCircle
                style={{ position: "relative", top: "10%", left: "10%" }}
              />
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
              <h3 style={{ fontweight: "bolder", fontSize: "2rem" }}>
                Children
              </h3>
              <p style={{ fontSize: "1.2rem" }}>Under 13</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <AiOutlineMinusCircle
                style={{ position: "relative", top: "10% ", left: "-10%" }}
              />
              <h3 style={{ padding: "0 5px" }}>0</h3>
              <AiOutlinePlusCircle
                style={{ position: "relative", top: "10%", left: "10%" }}
              />
            </div>
          </div>

          <HeadButton />
        </div>
      </Modal>
    </>
  );
}

export default GuestsModalFilter;
