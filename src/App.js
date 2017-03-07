import React, { Component } from 'react';
import '../dist/main.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Scripts from './components/Scripts'
import StudentPraise from './components/StudentPraise'
import ParentPraise from './components/ParentPraise'
import Why from './components/Why'
import Space from './components/Space'
import Students from './components/Students'

export default class App extends Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     gifs: []
  //   };
  // } 

  render() { 
    return (
      <div>
        <Header />
        <Hero />
        <Space />
        <StudentPraise />
        <Space />
        <ParentPraise />
        <Space />
        <Why />
        <Space />
        <Students />
        <Footer />
      </div>
    );
  }
}
