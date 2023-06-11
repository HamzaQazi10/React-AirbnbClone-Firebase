import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0;
  background-color: ${({ theme }) => theme.colors.white};
  //background-color: aqua;

  .container {
    max-width: 120rem;
    padding: 0 1rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(4, 0.9fr);
  }
  .cardItem {
    width: 300;
    border-radius: "1rem";
  }

  /*   .imageStyle {
    border-radius: "1.2rem";
    //min-height: "200px";
    height: "200px";
  } */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    //background-color: red;
    margin-top: -1rem;

    .container {
      max-width: 130rem;
      padding: 0 1rem;

      //background-color: aqua;
    }
    .grid-three-column {
      grid-template-columns: repeat(3, 1fr);
      padding: 5rem 0;
    }
  }
  @media (max-width: 520px) {
    .container {
      //background-color: red;

      //margin-left: 10rem;
      //display: block;
    }
    .grid-three-column {
      //grid-template-columns: repeat(1fr);
      display: block;

      gap: 1rem;
    }
    .cardItem {
      margin-top: 2rem;
    }
  }
`;
