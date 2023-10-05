import React from 'react';
import Whatwedo from './Whatwedo';
import Blog from './Blog';
import About from './Aboutus';
import Customer from './Customer';
import News from './News';
import Contact from './Contact';
import Content from './Content';
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <div class="header_section" style={{float:"left"}}>
        <Banner />
      </div>

      <Content />
      <Whatwedo />
      <Blog />
      <About />
      <Customer />
      <News />
      <Contact />


    </>
  );
}

export default Home