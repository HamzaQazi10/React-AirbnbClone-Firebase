import styled from "styled-components";

export const NavbarWrapper = styled.section`
  width: 100%;
  //background-color: red;
  padding: 0 1rem;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    //position: sticky;
    margin-top: 2.8rem; //I have to remove this after uncommenting modal-wrapper right, left property
    background-color: ${({ theme }) => theme.colors.white};
    //background-color: red;
    //z-index: 1000;
  }
  .Titles {
    font-size: 12px;
    font-weight: 600;
    color: #717171;
  }
  .menu {
    align-items: center;
    background-color: green;
    justify-content: space-between;
  }
  .btn {
    align-self: flex-end;
    align-items: center;
    //background-color: red;
    padding-bottom: 3rem;
  }
  @media (max-width: 640px) {
    .navbar {
      margin-top: 0.8rem;
    }
  }
  /*   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar {
      margin-top: 3.8rem;
    }
  } */
`;
