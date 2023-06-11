import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./Cart";
import Error from "./pages/Error";
import SingleProduct from "./SingleProduct";
import Footer from "./components/Footer"; */
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ItemSection from "./components/ItemSection";
import SingleItem from "./components/SingleItem";
import Home from "./pages/Home";
import AddListings from "./components/AddListings";
import SignUp from "./components/Login/SignUp";
import { auth } from "./Firebase";
export const CountContext = React.createContext();
export const SearchContext = React.createContext();
//const initialState = { firstCounter: 0 };
const searchState = [
  {
    region: "alls",
    checkin: "",
    checkout: "",
    adults: 4000,
    children: 4000,
  },
];
const initialState = [
  {
    id: 0,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-16576460/original/9fbe3c2d-637c-409f-90e4-9670275f5afe.jpeg?im_w=720",
    price: 20,
    kitchen: 0,
    country: "US",
    city: "New York",
    space: "shared",
    parking: true,
    wifi: true,
    ac: true,
    grill: false,
    washer: true,
    hottub: false,
    rooms: 3,
    beds: 3,
    washrooms: 3,
    adults: 4,
    children: 4,
    infants: 4,
    pets: 4,
  },
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1894813/original/a155c0d8-b957-497f-8d36-ac60b1c47776.jpeg?im_w=720",
    price: 40,
    kitchen: 1,
    country: "Canada",
    city: "Ottawa",
    space: "entire",
    parking: true,
    wifi: true,
    ac: true,
    grill: true,
    washer: true,
    hottub: true,
    rooms: 4,
    beds: 4,
    washrooms: 4,
    adults: 3,
    children: 3,
    infants: 3,
    pets: 3,
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-43688051/original/e8b3c729-fbb0-4133-875e-ba631f354d83.jpeg?im_w=720",
    price: 30,
    kitchen: 2,
    country: "UK",
    city: "London",
    space: "entire",
    parking: false,
    wifi: true,
    ac: true,
    grill: false,
    washer: true,
    hottub: false,
    rooms: 3,
    beds: 3,
    washrooms: 3,
    adults: 2,
    children: 2,
    infants: 2,
    pets: 2,
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-52779062/original/85136951-30dd-4bdf-84f0-eb61ac9d09de.jpeg?im_w=720",
    price: 10,
    kitchen: 4,
    country: "US",
    city: "Arizona",
    space: "shared",
    parking: true,
    wifi: true,
    ac: true,
    grill: false,
    washer: true,
    hottub: false,
    rooms: 4,
    beds: 4,
    washrooms: 4,
    adults: 1,
    children: 1,
    infants: 1,
    pets: 1,
  },
];
const searchreducer = (state = searchState, action) => {
  console.log("---------------->>>>", action.value);
  switch (action.type) {
    case "increment":
      return [action.value];
    default:
      return state;
  }
};
const reducer = (state = initialState, action) => {
  console.log("---------------->>>>", action.value);
  switch (action.type) {
    case "increment":
      return [...state, action.value];
    default:
      return state;
  }
};
const App = () => {
  console.log("appp is----------------------------");
  const [count, dispatch] = useReducer(reducer, initialState);
  const [search, searchdispatch] = useReducer(searchreducer, searchState);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      grey: "grey",
      black: " #212529",
      danger1: "#ff4d4f",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "rgb(0, 102, 128)",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => console.log("User is (APP.JS)", user));
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <SearchContext.Provider
          value={{ countState: search, countDispatch: searchdispatch }}
        >
          {/*       <Header />
        <Navbar />
      <ItemSection /> */}
          <Router>
            {/* <GlobalStyle /> */}
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add" element={<AddListings />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              {/* <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route> */}
              <Route path="/singleproduct/:id" element={<SingleItem />}></Route>
              {/* <Route path="*" element={<Error />}></Route> */}
            </Routes>

            {/*   <Footer /> */}
          </Router>
        </SearchContext.Provider>
      </CountContext.Provider>
    </ThemeProvider>
  );
};

export default App;
