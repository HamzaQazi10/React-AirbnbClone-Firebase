import React, { useState, useContext, useEffect } from "react";
import { OfferingsWrapper, StyledText } from "./styles/OfferingsWrapper";

import { MdPets } from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";
import { AiOutlineCar } from "react-icons/ai";
import { GiCampfire } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { HeadButton } from "../../styles/HeadButton";
import { Modal } from "antd";
import { ModalinButton } from "../Header/styles/ModalinButton";
import { FilterButton } from "../Navbar/styles/FilterButton";
import { CountContext } from "../../App";
import { useParams } from "react-router-dom";
import { AiOutlineWifi } from "react-icons/ai";
import { FaSwimmingPool, FaHotTub } from "react-icons/fa";
import { RiWifiFill } from "react-icons/ri";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineOutdoorGrill, MdOutlineAir } from "react-icons/md";
function Offerings() {
  //const [Kitchen, setKitchen] = useState();

  let Item_id = useParams();
  const countContext = useContext(CountContext);
  const [data1, setdata1] = useState(countContext.countState);
  const [count, setcount] = useState(false);
  const [countcheck, setcountcheck] = useState(4);
  const ItemList = data1.find((p) => p.id == Item_id.id);

  console.log("useParams is ------ ", Item_id);
  console.log("count is ---", countContext.countState);
  console.log("specific id is ", ItemList);
  // console.log("kitchen is ", ItemList.kitchen);

  return (
    <>
      <OfferingsWrapper>
        <div className="amenities">
          <div
            style={{
              fontWeight: "bold",
              fontFamily: `Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important`,
              fontWeight: "690",
              fontSize: "24px",
              color: "#222222",
            }}
          >
            What this place offers
          </div>
        </div>
        {/*         {ItemList.kitchen > 0 && (
          <div className="amenities-1">
            <div className="amenities-flex">
              <TbToolsKitchen2 size={30} />
              <p>Kitchen</p>
            </div>
          </div>
        )} */}
        {/*         {ItemList.parking && (
        )} */}
        <div className="amenities-1">
          {/*           <div className="amenities-flex">
            <AiOutlineCar size={30} />
            <StyledText variant={ItemList.parking} className="items">
              Parking
            </StyledText>
          </div> */}
        </div>
        {/*         {ItemList.wifi && (
        )} */}
        <div className="amenities-1">
          <div className="amenities-flex">
            <AiOutlineWifi size={30} />
            <StyledText variant={ItemList.wifi} className="items">
              Wifi
            </StyledText>
          </div>

          <div className="amenities-flex">
            <FaHotTub size={30} />
            <StyledText variant={ItemList.hottub} className="items">
              HotTub
            </StyledText>
          </div>
        </div>
        {/*         {ItemList.ac && (
        )} */}
        <div className="amenities-1"></div>
        {/*         {ItemList.grill && (
        )} */}
        <div className="amenities-1">
          <div className="amenities-flex">
            <MdOutlineOutdoorGrill size={30} />
            <StyledText variant={ItemList.grill} className="items">
              Grill
            </StyledText>
          </div>
          <div className="amenities-flex">
            <AiOutlineCar size={30} />
            <StyledText variant={ItemList.parking} className="items">
              Parking
            </StyledText>
          </div>
        </div>
        {count == true && (
          <div className="amenities-1">
            <div className="amenities-flex">
              <MdOutlineAir size={30} />
              <StyledText variant={ItemList.ac} className="items">
                AC
              </StyledText>
            </div>
            <div className="amenities-flex">
              <GiWashingMachine size={30} />
              <StyledText variant={ItemList.washer} className="items">
                Washer
              </StyledText>
            </div>
          </div>
        )}
        {count == true && <div className="amenities-1"></div>}

        <div className="btn">
          <FilterButton
            onClick={() => {
              setcount(true);
            }}
          >
            {/* <RiFilter3Fill />
             */}{" "}
            <h6>Show More</h6>
          </FilterButton>
        </div>
        {/*         <div class="flexbox-wrapper">
          <div class="regular">This is the regular box</div>
          <div class="sticky">This is the sticky box</div>
        </div> */}
      </OfferingsWrapper>
    </>
  );
}

export default Offerings;
