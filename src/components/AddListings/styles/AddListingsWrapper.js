import styled from "styled-components";

export const AddListingsWrapper = styled.div`
  .bg {
    background: linear-gradient(to right, #9900ff, #cc80ff);
    position: fixed;
    z-index: -100;
    //background-color: red;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .img {
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.6);
    background-blend-mode: lighten;
  }
  .container {
    display: block;
    text-align: center;

    /*   margin-top: 20rem;
    margin-left: 50%; */
    /*  width: 100vh;
    height: 100vh; */
    //background-color: red;
  }
  .centrealign {
    //background-color: aqua;
    border-radius: 5%;
    margin-top: 15rem;
    padding: 5rem 20rem;
    background-color: white;
    margin-left: 20rem;
    margin-right: 20rem;
  }
  .airbnb {
    color: ${({ theme }) => theme.colors.danger1};
  }
  .earn {
    color: ${({ theme }) => theme.colors.black};
  }
  .inner {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1030px) {
    .centrealign {
      //background-color: aqua;
      margin-top: 15rem;
      padding: 5rem 10rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
  @media (max-width: 768px) {
    .centrealign {
      //background-color: aqua;
      margin-top: 15rem;
      padding: 5rem 10rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
  @media (max-width: 520px) {
    .centrealign {
      //background-color: aqua;
      margin-top: 15rem;
      padding: 2rem 2rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
`;
