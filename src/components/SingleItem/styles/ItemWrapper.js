import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.white};

  .imageContainer {
    //padding: 5rem 10rem;
    max-width: 120rem;
    padding: 0;
    //background-color: aqua;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imageContainer-1 {
    //background-color: red;
    display: block;
  }
  .imageContainer-2 {
    //background-color: green;
    /* display: flex;
    justify-content: space-around; */
  }
  .imageContainer-3 {
    width: 50%;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    float: left;
  }
  .imageStyle {
    height: 200px;
  }
  .btn {
    display: none;
  }
  .btn-heart {
    display: none;
  }
  /*   .imageContainer-1 {
    //padding: 1rem 1rem;
    //margin: 3rem;
    //background-color: red;
    display: block;
  }
  .imageContainer-2 {
    //padding: 1rem 1rem;
    //margin: 1rem;
    //background-color: green;
    display: flex;
    justify-content: space-around;
  }
  .imageContainer-3 {
    padding-left: 1rem;
    padding-bottom: 0.3rem;
    //margin: 1rem;
    display: flex;
    //background-color: yellow;
    justify-content: space-around;
  } */

  /*   .imageStyle {
    border-radius: "1rem";
    min-height: "400px";
    max-height: "400px";
  } */
  /*   .imageStyle1 {
    min-height: "200px";
    max-height: "200px";
  } */
  @media (max-width: 600px) {
    .btn {
      display: block;
      position: absolute;
      z-index: 100;
      top: 3%;
      left: 3%;
      border-radius: 50%;
      padding: 10px;
      background-color: white;
      cursor: pointer;
    }
    .btn-heart {
      position: absolute;
      z-index: 100;
      right: 3%;
      top: 3%;
      border-radius: 50%;
      padding: 10px;
      background-color: white;
      cursor: pointer;
    }
    .imageContainer {
      position: absolute;
      border-radius: 0px;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
    }
    .imageContainer-3 {
      display: none;

      //background-color: aqua;
    }
    /*     .info1 {
      position: absolute;
      top: 401px;
      z-index: 100;
      left: 3rem;
    } */
  }
`;
