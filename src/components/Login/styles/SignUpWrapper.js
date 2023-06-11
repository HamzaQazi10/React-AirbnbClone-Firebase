import styled from "styled-components";

export const SignUpWrapper = styled.div`
  .bg {
    //position: fixed;
    z-index: -100;
    //background-color: red;
    top: 0;
    left: 0;
    right: 0;

    height: 50vh;
  }
  .contact {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(-50%);
  }
  .bg1 {
    position: fixed;
    z-index: -100;
    background-color: ${({ theme }) => theme.colors.danger1};

    left: 0;
    right: 0;
    bottom: 0;
    height: 50vh;
  }
  .img {
    height: 50%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.6);
    background-blend-mode: lighten;
  }
  .Upper {
    //background-color: aqua;
  }
`;
