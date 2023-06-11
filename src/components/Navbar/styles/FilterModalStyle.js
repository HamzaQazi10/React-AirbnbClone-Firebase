import styled from "styled-components";

export const FilterModalStyle = styled.div`
  //position: inherit;
  .main {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .main h3 {
    font-weight: bold;
  }
  .main p {
    font-weight: lighter;
    margin-top: 1rem;
  }
  .price-div {
    display: flex;
    margin-top: 1rem;
  }
  .InputField {
    background-color: rgb(188 179 179 / 25%);
  }
  .main-1 {
    margin-top: 2rem;
  }
  .new-main-2 {
    margin-top: 2rem;
  }
  .Span {
    margin-left: 0.5rem;
  }
  .new-main-2-flex {
    display: flex;
    justify-content: space-between;
  }
  .new-main-2-no-flex {
    background-color: red;
  }
  .new-main-2-flex-sec {
    border: 1px solid black;
  }
  /*   .main input:checked ~ .Span {
    background-color: green;
  } */
  .main-2 {
    margin-top: 1rem;
  }
  .rooms-div {
    display: flex;
    //background-color: red;
    position: relative;
    overflow-x: scroll;
  }
  .main-3 {
    margin-top: 1rem;
    //background-color: aqua;
    display: flex;
    justify-content: end;
    //float: right;
  }
  .main-3-end {
    justify-self: flex-end;
  }
`;
