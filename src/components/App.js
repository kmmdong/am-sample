import React, { Component } from 'react';
import Header from './Header'
import style from '../styles/App.css'

export default class App extends React.Component {
  constructor (props) {
  super (props)
    }    
  render() {
    return (
     <div className={style.container}>
        <Header className={style.header} />
      </div>);
  }
};
