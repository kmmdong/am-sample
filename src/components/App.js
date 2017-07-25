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
        <Header 
          deskTopHeader={this.props.deskTopHeader}
          selectAboutDesktop={this.props.selectAboutDesktop}
          selectPortDesktop={this.props.selectPortDesktop}
        />
        <MobileHeader
          mobileHeader={this.props.mobileHeader} 
          selectHamMobile={this.props.selectHamMobile}
          selectAboutMobile={this.props.selectAboutMobile}
          selectPortMobile={this.props.selectPortMobile}
        />
     </div>);
  }
};
