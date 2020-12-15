import React from 'react';
import styled from 'styled-components';
import { FlexMixin } from '../styles/Mixins';

const Footer = styled.section`
  ${FlexMixin}
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #025456;
  & p {
    color: #fff;
  }
`;

const index = () => (
  <Footer>
    <div>
      <p>Este sitio solo es de caracter informativo</p>
    </div>
  </Footer>
);

export default index;
