import React, { useState } from "react";
import { Button, Input, Space, Modal } from "antd";
import { FilterModalStyle } from "./styles/FilterModalStyle";
import { RoomButton, BedButton } from "./styles/RoomButton";

function FilterModal(props) {
  const roomTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Max Price is ", props.maxPrice);
  const [priceMin, setpriceMin] = useState(props.minPrice);
  const [priceMax, setpriceMax] = useState(props.maxPrice);
  const [bedrooms, setbedrooms] = useState(props.rooms);
  return (
    <>
      <Modal
        //style={{ minWidth: "60rem" }}
        open={props.open}
        onCancel={props.handleClose}
        footer={[]}
      >
        <FilterModalStyle>
          <div className="main">
            <h3>Price</h3>
            <p>The average night price</p>
            <div className="price-div">
              <Input
                className="InputField"
                placeholder="Min Price"
                //onInput={(e) => (e.target.value = e.target.value.toLowerCase())}
                onChange={(e) => {
                  setpriceMin(e.target.value);
                  props.handleMinPrice(e.target.value);
                  //console.log("cvb...", priceMin, "wwwopopop", props.minPrice);
                }}
              ></Input>
              <p>-</p>
              <input
                className="InputField"
                placeholder="Max Price"
                onChange={(e) => {
                  setpriceMax(e.target.value);
                  props.handleMaxPrice(e.target.value);
                  //console.log("cvb...", priceMax, "wwwopopop", props.maxPrice);
                }}
              ></input>
            </div>
            <div className="new-main-2">
              <h3>Space Select</h3>
              <div className="new-main-2-flex">
                <div>
                  <input
                    value="item1"
                    type="checkbox"
                    onChange={() => props.handleroomstype("entire")}
                  />
                  <span className="Span">Entire Place</span>
                </div>
                <div>
                  <input
                    value="item2"
                    type="checkbox"
                    onChange={() => props.handleroomstype("private")}
                  />
                  <span className="Span">Private</span>
                </div>
                <div>
                  <input
                    value="item3"
                    type="checkbox"
                    onChange={() => props.handleroomstype("shared")}
                  />
                  <span className="Span">Shared</span>
                </div>
                {/* <div className="new-main-2-no-flex"></div> */}
              </div>
            </div>
            <div className="main-1">
              <h3>Rooms and Bedrooms</h3>
              <div className="main-2">
                <p>Bedrooms</p>
                <div className="rooms-div">
                  <RoomButton>Any</RoomButton>
                  {roomTotal.map((list, index) => (
                    <RoomButton
                      key={index}
                      onClick={(e) => {
                        console.log("e is ", index);
                        setbedrooms(index + 1);
                        props.handlerooms(index + 1);
                      }}
                    >
                      {list}
                    </RoomButton>
                  ))}
                </div>
              </div>
              <div className="main-2">
                <p>Washrooms</p>
                <div className="rooms-div">
                  <BedButton>Any</BedButton>
                  {roomTotal.map((list, index) => (
                    <BedButton
                      key={index}
                      onClick={(e) => {
                        console.log("e is ", index);
                        //setbeds(index + 1);
                        props.handlebeds(index + 1);
                      }}
                    >
                      {list}
                    </BedButton>
                  ))}
                </div>
              </div>
              <div className="main-2">
                <p>Beds</p>
                <div className="rooms-div">
                  <RoomButton>Any</RoomButton>
                  {roomTotal.map((list) => (
                    <RoomButton>{list}</RoomButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-3">
            <div className="main-3-end">
              <Button
                danger
                onClick={() => {
                  props.handleClose();
                  //setpets(pets + 1);
                  //    props.GuestshandleCancel();
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </FilterModalStyle>
      </Modal>
    </>
  );
}

export default FilterModal;
