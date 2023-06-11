import styled from "styled-components";

export const LogoHead = styled.div`
  width: 100%;
  margin-top: 2rem;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.white};
    //z-index: 100;
  }

  .navbar-logo {
    height: 4rem;
  }

  .search-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 2.5rem;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 4rem;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    //z-index: 100000;
  }

  .search-bar:hover {
    box-shadow: 0 1px 2px rgb(0 0 0 / 15%), 0 4px 12px rgb(0 0 0 / 10%);
    transition: all 0.2s;
    cursor: pointer;
  }

  .search-bar-text {
    font-size: 1.5rem;
    font-weight: 300;
    border-right: 1.5px solid #e6e6e6;
    padding-right: 1.5rem;
  }
  .search-bar-text1 {
    font-size: 1.5rem;
    border-right: 1.5px solid #e6e6e6;
    padding-right: 1.5rem;
    padding-left: 1rem;
    font-weight: 300;

    //fontSize: "14px",
  }

  .search-bar-text2 {
    font-size: 1.3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grey};
    padding-right: 1.5rem;
  }
  .profile-container {
    display: flex;
  }
  .yourhome {
    margin-top: 0.5rem;
    padding: 0.35rem 2.5rem;
  }
  .profile-div {
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    //z-index: 1000;
    padding: 0.35rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2rem;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  }
  .search-bar-mobile {
    display: none;
  }
  .profile-div-mobile {
    display: none;
  }
  .UserProfileButton {
    background-color: gray;
  }
  /*   .ant-btn-default:hover,
  .ant-btn-default:focus {
    border-color: #bee2e5;
    color: #fff;
  } */

  @media (max-width: 640px) {
    .navbar {
      display: block;
      //background-color: red;
    }
    .profile-container {
      display: none;
    }
    .navbar {
      display: none;
    }
    .search-bar-mobile {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .search-bar-radius-mobile {
      width: 90%;
      background-color: white;
      border: 0.5px solid rgba(0, 0, 0, 0.08);
      padding: 1rem 1rem;
      border-radius: 1000px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      transform: translate3d(0, 0, 0);
      cursor: pointer;
    }
    .search-bar-radius-content-mobile {
      display: flex;
      //justify-content:;
    }
    .search-bar-radius-text-mobile {
      padding-left: 1rem;
      display: block;
    }
    .Anywhere-mobile {
      font-weight: 700;
      font-size: 14px;
    }
    .Anyweek-mobile {
      font-weight: 600;
      font-size: 12px;
      color: #717171;
    }
    .profile-div-mobile {
      z-index: 100;
      bottom: 0;
      left: 0;
      right: 0;
      position: fixed;
      background-color: white;
      display: block;
    }
    .profile-internal-div {
      padding: 0rem 2rem;
      display: flex;
      //background-color: green;
      justify-content: space-evenly;
    }
    .profile-internal-div-1 {
      display: block;
      text-align: center;
    }
    .profile-internal-div-1-part {
      font-size: 10px;
      font-weight: 500;
      //justify-content: center;
      //background-color: red;
    }
    .UserProfileButton {
      background-color: white;
      color: gray;
      border-color: 1px solid gray;
    }
    .search-BTN-Mobile {
      background-color: white;
      color: gray;
    }
    .ant-btn-default:hover,
    .ant-btn-default:focus {
      border-color: rgba(255, 56, 92, 1);
      color: rgba(255, 56, 92, 1);
      /*       transform: scale(1.02);
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow: ${({ theme }) => theme.colors.shadowSupport}; */
    }

    /*     .profile-div {
      margin-top: 6rem;
    } */
  }
`;
