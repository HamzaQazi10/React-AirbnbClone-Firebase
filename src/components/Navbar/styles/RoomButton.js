import styled from "styled-components";

export const RoomButton = styled.button`
  display: flex;
  text-decoration: none;
  max-width: auto;
  color: ${({ theme }) => theme.colors.grey};
  background-color: white;
  padding: 1rem 1.5rem;
  border: 1px solid gray;
  border-radius: 2rem;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    //color: red;
    font-size: 1.8rem;
  }
`;
export const BedButton = styled.button`
  display: flex;
  text-decoration: none;
  max-width: auto;
  color: ${({ theme }) => theme.colors.grey};
  background-color: white;
  padding: 1rem 1.5rem;
  border: 1px solid gray;
  border-radius: 2rem;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
