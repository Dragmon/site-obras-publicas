import styled from 'styled-components';

export const Page = styled.section`
  /* padding: ${(props) => props.theme.padding.paddingPage}; */
  margin: 0 10%;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    /* max-width: 1200px; */
    margin: 0 5%;
    padding: 0;
  }
`;
