import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 1rem 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  //background-color: aqua;
  .container-main {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(221, 221, 221);
    overflow-y: auto;
    position: relative;
    padding-right: 1rem;
    //background-color: red;
  }
  .container-main-info-part {
    display: flex;
    flex-direction: column;
  }
  .container-info {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    //background-color: green;
  }
  /*   .badge_btn {
    size: 56;
  } */
  .container-info-part {
    margin-top: 0.5rem;
    display: block;
    margin-left: 0.5rem;
  }
  .container-sticky {
    position: -webkit-sticky;
    position: sticky;
    //top: 0;
    margin-top: 3rem;
    align-self: flex-start; /* <-- this is the fix */
    background-color: white;
  }
  .card {
    display: block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    border-radius: 1rem;
  }
  .header-1 {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
  }
  .header-1-nested {
    display: flex;
    justify-content: space-evenly;
  }
  .header-1-nested h2 {
    font-size: 3rem;
  }
  .header-1-nested h3 {
    font-size: 1.5rem;
  }
  .header-1 h4 {
    font-size: 1.5rem;
  }
  .container-2 {
    /*  display: flex;
    justify-items: center; */
    //background-color: aqua;
  }
  .container-3 {
    /*     background-color: aqua;
    border: 1px solid gray;
    border-radius: 1rem; */
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .aircover {
    display: flex;
    border-top: 1px solid rgb(221, 221, 221);
    margin-top: 2rem;
    margin-bottom: 2rem;
    //padding-bottom: 1rem;
  }
  .amenities {
    margin-top: 2rem;
  }
  .amenities-flex {
    display: flex;
  }
  .sticked-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    /*     padding: 0rem 6rem;
    margin-top: 50%; */
    .container-sticky {
      display: none;
    }
  }
  @media (max-width: 600px) {
    padding: 0rem 8rem;
    margin-top: 50%;
    //overflow-x: hidden;
    //background-color: red;

    /*     .container-main {
      background-color: red;
    }
    .container-main-info-part {
      background-color: aqua;
    }
    .container-info {
      background-color: green;
    } */

    .container-sticky {
      display: none;
    }
    .sticked-mobile {
      position: fixed;
      display: block;
      bottom: 0%;
      width: 100%;
      padding: 0rem;
      margin-left: 0rem;
      background-color: red;
    }
  }
  @media (max-width: 520px) {
    padding: 0rem 6rem;
    margin-top: 50%;
    .container-sticky {
      display: none;
    }
  }
  @media (max-width: 435px) {
    padding: 0rem 4rem;
    margin-top: 60%;
    .container-sticky {
      display: none;
    }
  }
  @media (max-width: 350px) {
    padding: 0rem 6rem;
    margin-top: 70%;
    .container-sticky {
      display: none;
    }
  }
`;
export const SectionWrapperMobile = styled.div`
  .sticked-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    padding: 0rem 0rem;
    display: flex;
    margin-top: 50%;
    .sticked-mobile {
      z-index: 1000;
      position: fixed;
      display: flex;
      justify-content: space-between;
      bottom: 0%;
      width: 100%;
      padding: 0rem;
      margin-left: 0rem;
      border-top: 1px solid #f7f0dc;
      //background-color: red;
      background-color: #ffffff;
    }
    .header1-mobile {
      display: block;
    }
    .header1-mobile p {
      text-decoration: underline;
      padding-left: 2rem;
      font-weight: 800;
    }
    .header-1-mobile {
      display: flex;
      padding: 2rem;
      //background-color: red;
      padding-bottom: 0rem;
    }
    .header-1-mobile h2 {
      font-size: 3rem;
    }
    .header-1-mobile h3 {
      font-size: 1.5rem;
    }
  }
`;
