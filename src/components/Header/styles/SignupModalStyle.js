import styled from "styled-components";

export const SignupModalStyle = styled.div`
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
    position: absolute;
    background-color: red;
    max-width: 48rem;
    top: 10%;
    right: 5%;
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
    top: 13%;
    left: 50%;
    z-index: 100;
  }
  @media (max-width: 520px) {
    .modal-container {
      top: 11%;
    }
    .modal-flex {
      transform: translate(-50%, 15%);
    }

    .cancelBtn {
      top: 16%;
    }
  }
`;
