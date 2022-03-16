import React from 'react';
import './App.css';
import { Vr, Get, Blog, Footer, Future, Header, Wgpt3, Brand } from './components';
import { Navbar } from './containers'

const App = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <Brand/>
    <Wgpt3/>
    <Future/>
    <Vr/>
    <Get/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App