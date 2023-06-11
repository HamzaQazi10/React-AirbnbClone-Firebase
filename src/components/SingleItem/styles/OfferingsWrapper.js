import styled from "styled-components";

export const OfferingsWrapper = styled.section`
  //padding: 0rem 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid rgb(221, 221, 221);
  padding-right: 15rem;
  .aircover {
    display: flex;
    //margin-top: 2rem;
  }
  .amenities {
    margin-top: 2rem;
  }
  .amenities-1 {
    display: flex;
    justify-content: space-between;
  }
  .amenities-flex {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    padding-left: 1rem;
  }
  .items {
    margin-left: 1rem;
  }
  .btn {
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
  }
`;
export const StyledText = styled.p`
  //text-decoration: line-through;
  text-decoration: ${(props) =>
    props.variant == true ? "none" : "line-through"};
`;
