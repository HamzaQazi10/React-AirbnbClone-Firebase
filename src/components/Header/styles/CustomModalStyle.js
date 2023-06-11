import styled from "styled-components";

export const CustomModalStyle = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .modal-container {
    position: fixed;
    display: flex;
    background-color: red;
    max-width: 48rem;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  .modal-flex {
    display: flex;
    position: fixed;
    padding: 1rem 3rem;
    border-radius: 3rem;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    min-width: 40rem;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    //z-index: 1000;
  }
  .cancelBtn {
    position: absolute;
    top: 18%;
    left: 50%;
    z-index: 100;
  }
  @media (max-width: 640px) {
    .modal-container {
      top: 16%;
    }
    .modal-flex {
      transform: translate(-50%, 15%);
    }

    .cancelBtn {
      top: 22%;
    }
  }
`;
