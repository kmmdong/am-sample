import React, { Component } from 'react';
import style from '../styles/App.css'

export default class Header extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      hover: false
    }
  };

  selectedAbout(e) {
    e.preventDefault()
    if (this.props.deskTopHeader.showPort) {
      this.props.selectPortDesktop()
    } else {
      this.props.selectAboutDesktop()
    }
  };

  selectedPort(e) {
    e.preventDefault()
    if (this.props.deskTopHeader.showAbout) {
      this.props.selectAboutDesktop()
    } else {
      this.props.selectPortDesktop()
    }
  };

  mouseOn() {
    this.setState({
      hover: true
    })
  };

  mouseLeave() {
    this.setState({
      hover: false
    })
  };

  render() {
    return (
      <header className={style.header}>
        <div className={style.hdWrap}>
          <h1 className={style.logo}>
            <a href="/">
              <img src="src/img/logo.png" alt=""/>
            </a>
          </h1>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li onClick={this.selectedAbout.bind(this)}>
                <a className={this.props.deskTopHeader.showAbout && style.clickedNav} href="">About</a>
                <img className={style.arrow} src={this.props.deskTopHeader.showAbout ? "src/img/arrow.png" : "src/img/arrow_up.png"} alt=""/>
                { this.props.deskTopHeader.showAbout &&
                  <div className={style.subList}>
                  <ul>
                    <li><a><img src="src/img/weare.png" alt=""/><br/>we are</a></li>
                    <li><a><img src="src/img/service.png" alt=""/><br/>service</a></li>
                    <li><a><img src="src/img/contact.png" alt="" title=""/><br/>contact</a></li>
                    <li><a><img src="src/img/recruit.png" alt=""/><br/>recruit</a></li>
                  </ul>
                </div>
                }
              </li>
              <li onClick={this.selectedPort.bind(this)}>
                <a className={this.props.deskTopHeader.showPort && style.clickedNav}href="">Portfolio</a>
                <img className={style.arrow} src={this.props.deskTopHeader.showPort ? "src/img/arrow.png" : "src/img/arrow_up.png"} alt=""/>
                 { this.props.deskTopHeader.showPort &&
                  <div className={style.subList}>
                    <ul className={style.port}>
                      <li><a><img src="src/img/all.png" alt=""/><br/>평형대별</a></li>
                      <li><a><img src="src/img/section.png" alt=""/><br/>공간대별</a></li>
                    </ul>
                  </div>
                  }
              </li>
              <li>
                <a href="">a:m Picks</a>
              </li>
               <li className={style.inqu} onMouseEnter={this.mouseOn.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
                 <a href="">
                   <img src={this.state.hover ? "src/img/inquire_on.png" :"src/img/inquire.png"} alt=""/>
                   리모델링 신청
                 </a>
               </li>  
            </ul>         
          </nav>
        </div>
      </header>
    )
  }
};
