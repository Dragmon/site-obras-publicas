import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const index = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default index;
