import styled from "styled-components";

export const SpaceModalWrapper = styled.div`
  .heading {
    font-weight: bolder;
    font-size: 2rem;
    margin-top: 1rem;
  }
  .maincontainer {
    display: flex;
    justify-content: space-between;
    border-radius: 2rem;
  }
  .container1 {
    display: flex;
    flex-direction: column;
  }
  .heading2 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  .container2 {
    display: flex;
    justify-content: space-evenly;
  }
  .minus {
    position: relative;
    top: 10%;
    left: -10%;
  }
  .heading3 {
    padding: 0px 10px;
    padding-bottom: 1px;
  }
  .plus {
    position: relative;
    top: 10%;
    left: 10%;
  }
  /*   @media (max-width: 768px) {
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
  } */
`;
