import React, { Component } from 'react';
import Header from './Header'
import MobileHeader from './MobileHeader'
import style from '../styles/App.css'

export default class App extends React.Component {
  constructor (props) {
    super (props)
  }    
  
  render() {
    return (
     <div className={style.container}>
        <Header selectSub={this.props.selectSub}/>
        <MobileHeader />
     </div>);
  }
};
