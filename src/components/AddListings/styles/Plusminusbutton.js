import styled from "styled-components";

export const Plusminusbutton = styled.button`
  text-decoration: none;
  max-width: auto;
  color: ${(props) =>
    props.variant == true ? "black" : `${({ theme }) => theme.colors.grey}`};
  background-color: white;
  padding: 0 1rem;
  //border: none;
  border: none;
  border-radius: 1rem;
  margin: 0rem 0rem;
  //text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    //box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    //box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    //border: 1px solid black;
    color: black;
    transform: scale(1.4);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
