import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h1>I'm Kishan, a Software Engineer </h1>
      <h2>Need a developer ? <Link to="/contact">Contact me.</Link> </h2>
      <Footer />
    </div>
  )
}

export default HomePage;
