//import { useProductContext } from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { Card, Image } from "antd";
import { Wrapper } from "./styles/Wrapper";
import { CountContext, SearchContext } from "../../App";
const { Meta } = Card;
const ItemSection = (props) => {
  const countContext = useContext(CountContext);
  console.log(
    "_________________ITEM SECTION COMPONENT IS CALLED:____________________"
  );
  console.log("Data from APP.js Provider is", countContext.countState);
  const [data1, setdata1] = useState(countContext.countState);
  const [data2, setdata2] = useState(data1);
  const [data3, setdata3] = useState(data1);
  //console.log("filter button status", props.filter);
  //console.log("filter -------------------- ", props.rooms);
  console.log("filter Item Min is ", props.minPrice);
  console.log("filter Item Max is ", props.maxPrice);
  const countContext2 = useContext(SearchContext);
  //const data4 = countContext2.countState[0].adults;
  const data4 = countContext2.countState[0];
  console.log("DATA4 <----->", data4);
  //const filterADULTS = data4[0].adults;
  console.log(
    "countContext2 from Item Section is ------",
    countContext2.countState
  );
  const [dataFromContext, setdataFromContext] = useState(
    countContext2.countState
  );

  console.log("countContext2 datafromContext---", dataFromContext);
  console.log("DATA3 <----->", data3[0].adults);
  console.log("DATA1 <----->", data1);
  console.log("DATA3 <----->", data3);
  const filteredAdults = data3
    .filter((p) => p.adults <= data4.adults)
    .filter((p) => p.children <= data4.children); //Have to Add the infants and pets
  console.log(
    "Adults filter <--HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH--->",
    filteredAdults
  );
  useEffect(() => {
    console.log("UseEffect of ITEMSECTION is called");
    setdata1(filteredAdults);
    console.log("roomtype is---------------------", props.roomsType);
    if (props.roomsType == "") {
      const filtered = filteredAdults
        .filter((p) => p.price >= props.minPrice)
        .filter((p) => p.price <= props.maxPrice);
      //.filter((p) => p.rooms == props.rooms);
      console.log("filter Item List is----------->  ", filtered);
      setdata1(filtered);
    } else {
      console.log("------roomtype is------", props.roomsType);
      const filtered = filteredAdults
        .filter((p) => p.price >= props.minPrice)
        .filter((p) => p.price <= props.maxPrice)
        .filter((p) => p.space == props.roomsType);
      //.filter((p) => p.rooms == props.rooms);
      console.log("ELSE------filter Item List is----------->  ", filtered);
      setdata1(filtered);
    }
  }, [props.filter, data4]);

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="grid grid-three-column">
          {data1.map((Eleme) => (
            //const { id, image, price } = Eleme;
            <NavLink to={`/singleproduct/${Eleme.id}`}>
              <Card
                hoverable
                className="cardItem"
                cover={
                  <Image
                    style={{
                      borderRadius: "1.2rem",
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}
                    src={Eleme.image}
                  />
                }
              >
                <AiOutlineHeart
                  size={25}
                  style={{
                    //backgroundColor: "red",
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    color: "white",
                  }}
                />
                <h4 style={{ fontWeight: "bold" }}>
                  {Eleme.city},{Eleme.country}
                </h4>
                <h5 style={{ fontWeight: "lighter" }}>{Eleme.space} space</h5>
                <h5 style={{ fontWeight: "bold" }}>{Eleme.price}$ night</h5>
              </Card>
            </NavLink>
          ))}
          {/*           <NavLink to={`/singleproduct/${1}`}>
            <h1>jjjjjjjj</h1>
          </NavLink> */}
          {/* <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "1.2rem",
                  maxHeight: "200px",
                  minHeight: "200px",
                }}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "1.2rem",
                  maxHeight: "200px",
                  minHeight: "200px",
                }}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a155c0d8-b957-497f-8d36-ac60b1c47776.jpeg?im_w=720"
              />
            }
          >
            <h4 style={{ fontWeight: "bold" }}>Arizona,US</h4>
            <h5 style={{ fontWeight: "lighter" }}>July1-6</h5>
            <h5 style={{ fontWeight: "bold" }}>75$ night</h5>
          </Card>

          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "1.2rem",
                  maxHeight: "200px",
                  minHeight: "200px",
                }}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-43688051/original/e8b3c729-fbb0-4133-875e-ba631f354d83.jpeg?im_w=720"
              />
            }
          >
            <h4 style={{ fontWeight: "bold" }}>Arizona,US</h4>
            <h5 style={{ fontWeight: "lighter" }}>July1-6</h5>
            <h5 style={{ fontWeight: "bold" }}>75$ night</h5>
          </Card>
          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "1.2rem",
                  maxHeight: "200px",
                  minHeight: "200px",
                }}
                src="https://a0.muscache.com/im/pictures/miso/Hosting-52779062/original/85136951-30dd-4bdf-84f0-eb61ac9d09de.jpeg?im_w=720"
              />
            }
          >
            <h4 style={{ fontWeight: "bold" }}>Arizona,US</h4>
            <h5 style={{ fontWeight: "lighter" }}>July1-6</h5>
            <h5 style={{ fontWeight: "bold" }}>75$ night</h5>
          </Card> */}
        </div>
      </div>
      {/*       <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
                     {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })} 
        </div>
      </div> */}
    </Wrapper>
  );
};

export default ItemSection;
