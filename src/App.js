import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Layout>
        <Header />
        <Hero />
        <Body />
        <Footer />
    </Layout>
  );
};

export default App;
