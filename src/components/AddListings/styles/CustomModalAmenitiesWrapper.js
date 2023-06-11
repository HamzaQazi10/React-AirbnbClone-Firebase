import styled from "styled-components";

export const CustomModalAmenitiesWrapper = styled.div`
  .heading {
    font-weight: bolder;
    font-size: 2rem;
    margin-top: 1rem;
  }
  .container {
    /*     display: flex;
    justify-content: space-around; */
    //align-items: center;
    background-color: aqua;
  }
  .container1 {
    /*     display: flex;
    justify-content: space-around; */
    //align-items: center;
  }
  .flexstyle {
    //align-items: "centre";
    // background-color: aliceblue;
    display: flex;
    justify-content: space-evenly;
  }
  @media (max-width: 768px) {
    .centrealign {
      //background-color: aqua;
      margin-top: 15rem;
      padding: 0rem 10rem;
    }
  }
  @media (max-width: 768px) {
    .container1 {
      font-size: small;
    }
  }
  @media (max-width: 520px) {
    .container1 {
      font-size: smaller;
    }
  }
`;
