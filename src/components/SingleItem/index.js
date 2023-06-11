import React, { useContext, useState } from "react";
import { Wrapper } from "./styles/ItemWrapper";
import Header from "../Header";
import { Button, Image } from "antd";
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import Section from "./Section";
import Offerings from "./Offerings";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { CountContext } from "../../App";
function SingleItem() {
  let navigate = useNavigate();
  let Item_id = useParams();
  console.log("useParams is ", Item_id);
  const countContext = useContext(CountContext);
  /*   let location = useLocation();
  console.log("location is ", location.aboutProps[0]); */
  /* -------------GET THE SPECIFIC AD DROM THE LIST OF ADDS,
DATA1(data1)  CONTAINS ALL THE RECORD---------------------------------------------------- */
  const [data1, setdata1] = useState(countContext.countState);
  console.log("data is ", data1);
  const ItemList = data1.find((p) => p.id == Item_id.id);
  // const ItemList = data1.filter((item) => {
  //   return item.id == Item_id.id;
  // });
  //console.log("count is --->", ItemList);
  return (
    <>
      <Wrapper>
        <Header />
        <IoChevronBackOutline
          className="btn"
          size={50}
          onClick={() => navigate(-1)}
        />
        <AiOutlineHeart className="btn-heart" size={50} />
        {/*         <div className="info1">
          <h2 className="info">Farms</h2>
          <h4 className="area">Arizona US</h4>
        </div> */}
        <div className="imageContainer">
          <Image
            style={{
              borderRadius: "1rem",
              maxHeight: "400px",
              minHeight: "400px",
            }}
            //className="imageStyle"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
          />
          <div className="imageContainer-1">
            <div className="imageContainer-2">
              <div className="imageContainer-3">
                <Image
                  className="imageStyle"
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-40419248/original/97ea6049-b679-4aa6-8efc-8eeb8aba94c5.jpeg?im_w=720"
                />
              </div>
              <div className="imageContainer-3">
                <Image
                  className="imageStyle"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
                />
              </div>
            </div>
            <div className="imageContainer-2">
              <div className="imageContainer-3">
                <Image
                  className="imageStyle"
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-40419248/original/97ea6049-b679-4aa6-8efc-8eeb8aba94c5.jpeg?im_w=720"
                />
              </div>
              <div className="imageContainer-3">
                <Image
                  className="imageStyle"
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* ----------------------BELOW SECTION COMPONENT(Section) IS THE DEATAILS SECTION OF THE AD--------------- */}
      <Section />
      {/* <Offerings /> */}
    </>
  );
}

export default SingleItem;
{
  /* <div className="imageContainer-1">
            <div className="imageContainer-2">
              <div className="imageContainer-3">
                <Image
                  //className="imageStyle1"
                  style={{
                    //borderRadius: "1rem",
                    maxHeight: "200px",
                    minHeight: "200px",

                  }}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
                />
              </div>
              <div className="imageContainer-3">
                <Image
                  style={{
                    //borderRadius: "1rem",
                    maxHeight: "200px",
                    minHeight: "200px",
                  }}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
                />
              </div>
            </div>
            <div className="imageContainer-2">
              <div className="imageContainer-3">
                <Image
                  style={{
                    //borderRadius: "1rem",
                    maxHeight: "200px",
                    minHeight: "200px",
                  }}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720"
                />
              </div>
              <div className="imageContainer-3">
                <Image
                  style={{
                    //borderRadius: "1rem",
                    maxHeight: "200px",
                    minHeight: "200px",
                    width: "200px",
                  }}
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/ab97eff1-493a-4037-a12e-9a70f48cae98.jpeg?im_w=720"
                />
              </div>
            </div>
          </div> */
}
