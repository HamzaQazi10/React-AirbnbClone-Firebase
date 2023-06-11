import React, { useContext } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ItemSection from "../components/ItemSection";
import { CountContext } from "../App";
import { Button } from "antd";
//import { useContext } from "react";
const Home = () => {
  const countContext = useContext(CountContext);
  //console.log("count is ", countContext.countState);
  const data = {
    name: "VisionX",
    color: "red",
  };
  const handleClick = () => {
    //countContext.countDispatch({ type: "increment", value: 5 });
    //console.log("count is ", countContext.countState);
  };
  return (
    <>
      {/* <Button onClick={handleClick}>Increment</Button>
       */}
      <Header displayed="true" />

      {/*       <Navbar />
      <ItemSection /> */}
    </>
  );
};

export default Home;
