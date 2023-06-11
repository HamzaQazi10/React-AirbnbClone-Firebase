import styled from "styled-components";

export const RegionModalStyle = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }
  .modal-container {
    position: absolute;
    display: flex;
    background-color: yellow;
    top: 5%;
    left: 50%;
    height: 100px;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .modal-flex {
    /*     grid-template-columns: repeat(3, 1fr);
    background-color: aqua; */
    /* display: relative; */
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 1rem 3rem;
    border-radius: 1rem;
    /* justify-content: center; */
    background-color: green;
    width: 40rem;
    /* align-items: center; */
    /* top: 50%;
    left: 50%; */
    transform: translate(-50%, -150%);
    z-index: 10000;
  }
  .modal-flex-1 {
    /*     grid-template-columns: repeat(3, 1fr);
    background-color: aqua; */
    display: flex;
    position: absolute;
    border-radius: 1rem;
    justify-content: space-between;
    margin-left: 100px;
    background-color: red;
    /* align-items: center; */

    transform: translate(-50%, 50%);
    z-index: 10000;
  }
`;
