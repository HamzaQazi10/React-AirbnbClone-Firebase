import styled from "styled-components";

export const ModalinButton = styled.button`
  text-decoration: none;
  font-size: 1.2rem;
  max-width: auto;
  color: ${({ theme }) => theme.colors.black};
  background-color: rgba(0, 0, 0, 0);
  /*   background-color: ${(props) =>
    props.variant !== "active" ? "rgb(188 179 179 / 25%)" : "white"}; */
  border: none;
  border-radius: 1rem;
  padding: 0 0.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  /*   transform: ${(props) =>
    props.variant !== "active" ? "scale(1)" : "scale(1.96)"};
  box-shadow: ${(props) =>
    props.variant !== "active"
      ? "none"
      : "0 1rem 1rem 0 rgb(132 144 255 / 5%)"}; */
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:visited,
  &:active {
    box-shadow: 0 1rem 1rem 0 rgb(132 144 255 / 5%);
    background-color: ${({ theme }) => theme.colors.white};
    text-overflow: ellipsis;
    transform: scale(1.96);
    padding: 0 0.6rem;
    font-size: 0.8rem;
  }
  .active {
    box-shadow: 0 1rem 1rem 0 rgb(132 144 255 / 5%);
    background-color: ${({ theme }) => theme.colors.white};
    transform: scale(1.96);
  }
`;
