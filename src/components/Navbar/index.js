import React, { useState } from "react";
import { NavbarWrapper } from "./styles/NavbarWrapper";
import {
  GiCampingTent,
  GiFamilyHouse,
  GiSpookyHouse,
  GiDesert,
  GiTreehouse,
  GiWoodCabin,
  GiMountainCave,
  GiCaveEntrance,
  GiIsland,
  GiWaveSurfer,
  GiCastle,
  GiVillage,
} from "react-icons/gi";
import { MdHouseboat } from "react-icons/md";
import { RiHotelFill, RiFilter3Fill } from "react-icons/ri";
import { FaSwimmingPool } from "react-icons/fa";
import { CategoryButton } from "./styles/CategoryButton";
import { FilterButton } from "./styles/FilterButton";
import FilterModal from "./FilterModal";
import ItemSection from "../ItemSection";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//import "swiper/css";
//import "./styles.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(10000000000000);
  const [rooms, setrooms] = useState();
  const [roomsType, setroomsType] = useState("");
  const [beds, setbeds] = useState();
  const [filter, setfilter] = useState(false);

  const handleMinPrice = (data) => {
    setminPrice(data);
    //console.log("data is ", data, "min is ", minPrice);
  };
  const handleMaxPrice = (data) => {
    setmaxPrice(data);
    //console.log("data is ", data, "max is ", maxPrice);
  };
  const handlerooms = (data) => {
    console.log("method is called");
    setrooms(data);
    console.log("data is ", data, "max is ", rooms);
  };
  const handleroomstype = (data) => {
    //console.log("---------ROOMS TYPE IS SELECTED---------");
    setroomsType(data);
  };
  const handlebeds = (data) => {
    setbeds(data);
    //console.log("data is ", data, "max is ", rooms);
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log("---------------->p");
    setfilter(!filter);
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <NavbarWrapper>
        <div className="navbar">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={10}
            spaceBetween={6}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              280: {
                slidesPerView: 2,
              },
              412: {
                slidesPerView: 3,
              },
              456: {
                slidesPerView: 4,
              },
              639: {
                slidesPerView: 6,
              },
              865: {
                slidesPerView: 8,
              },
              1148: {
                slidesPerView: 10,
                //spaceBetween: 4,
              },
              1149: {
                slidesPerView: 11,
              },
            }}
            navigation
            //pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{
              //backgroundColor: "red",
              "--swiper-navigation-color": "1px solid black",
              "--swiper-navigation-inactive-color": "gray",
              "--swiper-navigation-border-radius": "1px solid red",
              "--swiper-navigation-inactive-opacity": "1",
              "--swiper-navigation-size": "16px",
              "--swiper-pagination-bullet-inactive-color": "transparent",
              //"--swiper-navigation-left": "0",
            }}
          >
            <div className="menu">
              <SwiperSlide>
                <CategoryButton style={{ paddingLeft: "2rem" }}>
                  <GiCampingTent size="4rem" color="#717171" />
                  <div
                    className="Titles"

                    /*                 style={{
                  color: "#717171",
                  fontSize: "12px",
                  fontWeight: "600",
                }} */
                  >
                    Tent
                  </div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiTreehouse size="4rem" color="#717171" />
                  <div className="Titles">Tree House</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiFamilyHouse size="4rem" color="#717171" />
                  <div className="Titles">House</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <RiHotelFill size="4rem" color="#717171" />
                  <div className="Titles">Hotel</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <FaSwimmingPool size="4rem" color="#717171" />
                  <div className="Titles">Amazing Pools</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiDesert size="4rem" color="#717171" />
                  <div className="Titles">Desert</div>
                </CategoryButton>
              </SwiperSlide>

              <SwiperSlide>
                <CategoryButton>
                  <GiSpookyHouse size="4rem" color="#717171" />
                  <div className="Titles"> FarmHouse</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiWoodCabin size="4rem" color="#717171" />
                  <div className="Titles">Cabin</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiMountainCave size="4rem" color="#717171" />
                  <div className="Titles">Mountain</div>
                </CategoryButton>
              </SwiperSlide>

              <SwiperSlide>
                <CategoryButton>
                  <GiCaveEntrance size="4rem" color="#717171" />
                  <div className="Titles">Cave</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <MdHouseboat size="4rem" color="#717171" />
                  <div className="Titles">House Boat</div>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiIsland size="4rem" color="#717171" />
                  <div className="Titles">Islands</div>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiWaveSurfer size="4rem" color="#717171" />
                  <div className="Titles">Surfing</div>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiCastle size="4rem" color="#717171" />
                  <div className="Titles">Castles</div>
                </CategoryButton>
              </SwiperSlide>
              {/*             <CategoryButton>
              <GiVillage size="4rem" color="#717171" />
              <div className="Titles">Village</div>
            </CategoryButton> */}
            </div>
          </Swiper>

          <div className="btn">
            <FilterButton onClick={showModal}>
              <RiFilter3Fill />
              <h6>Filter</h6>
            </FilterButton>
          </div>
        </div>
      </NavbarWrapper>
      <ItemSection
        filter={filter}
        minPrice={minPrice}
        maxPrice={maxPrice}
        rooms={rooms}
        roomsType={roomsType}
      />
      {open && (
        <FilterModal
          open={open}
          handleClose={handleClose}
          minPrice={minPrice}
          maxPrice={maxPrice}
          rooms={rooms}
          roomsType={roomsType}
          beds={beds}
          handleMinPrice={handleMinPrice}
          handleMaxPrice={handleMaxPrice}
          handlerooms={handlerooms}
          handlebeds={handlebeds}
          handleroomstype={handleroomstype}
        />
      )}
    </>
  );
}
export default Navbar;
{
  /*  <NavbarWrapper>
        <Swiper
          slidesPerView={18}
          spaceBetween={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="navbar">
            <div className="menu">
              <SwiperSlide>
                <CategoryButton>
                  <GiCampingTent size="4rem" />
                  <h6>Tent</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiFamilyHouse size="4rem" />
                  <h6>House</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiSpookyHouse size="4rem" />
                  <h6> FarmHouse</h6>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <RiHotelFill size="4rem" />
                  <h6>Hotel</h6>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <FaSwimmingPool size="4rem" />
                  <h6>Amazing Pools</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiDesert size="4rem" />
                  <h6>Desert</h6>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiTreehouse size="4rem" />
                  <h6>Tree House</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiWoodCabin size="4rem" />
                  <h6>Cabin</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiMountainCave size="4rem" />
                  <h6>Mountain</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiCaveEntrance size="4rem" />
                  <h6>Cave</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <MdHouseboat size="4rem" />
                  <h6>House Boat</h6>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiIsland size="4rem" />
                  <h6>Islands</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiWaveSurfer size="4rem" />
                  <h6>Surfing</h6>
                </CategoryButton>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiCastle size="4rem" />
                  <h6>Castles</h6>
                </CategoryButton>
              </SwiperSlide>
              <SwiperSlide>
                <CategoryButton>
                  <GiVillage size="4rem" />
                  <h6>Village</h6>
                </CategoryButton>
              </SwiperSlide>
            </div>

            <div className="btn">
              <FilterButton onClick={showModal}>
                <RiFilter3Fill />
                <h6>Filter</h6>
              </FilterButton>
            </div>
          </div>
        </Swiper>
      </NavbarWrapper>
       */
}
/* <NavbarWrapper>
        <div className="navbar">
          <div className="menu">
            <CategoryButton>
              <GiCampingTent size="4rem" />
              <h6>Tent</h6>
            </CategoryButton>
            <CategoryButton>
              <GiFamilyHouse size="4rem" />
              <h6>House</h6>
            </CategoryButton>
            <CategoryButton>
              <GiSpookyHouse size="4rem" />
              <h6> FarmHouse</h6>
            </CategoryButton>{" "}
            <CategoryButton>
              <RiHotelFill size="4rem" />
              <h6>Hotel</h6>
            </CategoryButton>{" "}
            <CategoryButton>
              <FaSwimmingPool size="4rem" />
              <h6>Amazing Pools</h6>
            </CategoryButton>
            <CategoryButton>
              <GiDesert size="4rem" />
              <h6>Desert</h6>
            </CategoryButton>{" "}
            <CategoryButton>
              <GiTreehouse size="4rem" />
              <h6>Tree House</h6>
            </CategoryButton>
            <CategoryButton>
              <GiWoodCabin size="4rem" />
              <h6>Cabin</h6>
            </CategoryButton>
            <CategoryButton>
              <GiMountainCave size="4rem" />
              <h6>Mountain</h6>
            </CategoryButton>
            <CategoryButton>
              <GiCaveEntrance size="4rem" />
              <h6>Cave</h6>
            </CategoryButton>
            <CategoryButton>
              <MdHouseboat size="4rem" />
              <h6>House Boat</h6>
            </CategoryButton>{" "}
            <CategoryButton>
              <GiIsland size="4rem" />
              <h6>Islands</h6>
            </CategoryButton>
            <CategoryButton>
              <GiWaveSurfer size="4rem" />
              <h6>Surfing</h6>
            </CategoryButton>{" "}
            <CategoryButton>
              <GiCastle size="4rem" />
              <h6>Castles</h6>
            </CategoryButton>
            <CategoryButton>
              <GiVillage size="4rem" />
              <h6>Village</h6>
            </CategoryButton>
          </div>

          <div className="btn">
            <FilterButton onClick={showModal}>
              <RiFilter3Fill />
              <h6>Filter</h6>
            </FilterButton>
          </div>
        </div>
      </NavbarWrapper>*/
//----------------------------------------------------------
{
  /* <NavbarWrapper>
        <div style={{ display: "flex" }}>
          <Swiper
            slidesPerView={15}
            spaceBetween={0}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            
          >
            <div className="navbar">
              <div className="menu">
                <SwiperSlide>
                  <CategoryButton>
                    <GiCampingTent size="4rem" />
                    <h6>Tent</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiFamilyHouse size="4rem" />
                    <h6>House</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiSpookyHouse size="4rem" />
                    <h6> FarmHouse</h6>
                  </CategoryButton>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <RiHotelFill size="4rem" />
                    <h6>Hotel</h6>
                  </CategoryButton>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <FaSwimmingPool size="4rem" />
                    <h6>Amazing Pools</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiDesert size="4rem" />
                    <h6>Desert</h6>
                  </CategoryButton>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiTreehouse size="4rem" />
                    <h6>Tree House</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiWoodCabin size="4rem" />
                    <h6>Cabin</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiMountainCave size="4rem" />
                    <h6>Mountain</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiCaveEntrance size="4rem" />
                    <h6>Cave</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <MdHouseboat size="4rem" />
                    <h6>House Boat</h6>
                  </CategoryButton>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiIsland size="4rem" />
                    <h6>Islands</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiWaveSurfer size="4rem" />
                    <h6>Surfing</h6>
                  </CategoryButton>{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiCastle size="4rem" />
                    <h6>Castles</h6>
                  </CategoryButton>
                </SwiperSlide>
                <SwiperSlide>
                  <CategoryButton>
                    <GiVillage size="4rem" />
                    <h6>Village</h6>
                  </CategoryButton>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
          <div className="btn">
            <FilterButton onClick={showModal}>
              <RiFilter3Fill />
              <h6>Filter</h6>
            </FilterButton>
          </div>
        </div>
      </NavbarWrapper>
       */
}
