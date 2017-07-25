import React, { Component } from 'react';
import style from '../styles/App.css';

export default class MobileHeader extends React.Component {
  constructor (props) {
    super (props)
  }

  openSub(e) {
    e.preventDefault()
    this.props.selectHamMobile()
  };

  selectedAbout(e) {
    e.preventDefault()
    this.props.selectAboutMobile()  
  };

  selectedPort(e) {
    e.preventDefault()
    this.props.selectPortMobile()
  };

  render() {
    return (
      <header className={style.mHeader}>
        <div className={style.mHdWrap}>
          <h1 className={style.logo}>
            <a href="/">
              <img src="src/img/logo.png" alt=""/>
            </a>
          </h1>
          <a href="#" className={style.mHdBtn} onClick={this.openSub.bind(this)}>
            <img src="src/img/btn_nav.png" alt=""/>
          </a>
        </div>
        {this.props.mobileHeader.showHam &&
        <div className={style.mSubMenu}>
          <a href="" className={style.mInquBtn}>
            <img src="src/img/inquire.png" alt=""/>
             리모델링 신청
          </a>
          <h3>
            <a className={this.props.mobileHeader.showAbout && style.clicked} onClick={this.selectedAbout.bind(this)} href="#">
              About
              <img src={this.props.mobileHeader.showAbout ? "src/img/arrow.png" : "src/img/arrow_up.png"} alt=""/>
            </a> 
          </h3>
          {this.props.mobileHeader.showAbout && <ul className= {style.mSubList}>
            <li><a href=""><img src="src/img/weare.png" alt=""/><br/>we are</a></li>
            <li><a className={style.br} href=""><img src="src/img/service.png" alt="" title=""/><br/>service</a></li>
            <li><a className={style.bt} href=""><img src="src/img/contact.png" alt=""/><br/>contact</a></li>
            <li><a className={style.brBt} href=""><img src="src/img/recruit.png" alt=""/><br/>recruit</a></li>
          </ul>}
          <h3>
            <a className={this.props.mobileHeader.showPort && style.clicked} onClick={this.selectedPort.bind(this)} href="#">
              Portfolio
              <img src={this.props.mobileHeader.showPort ? "src/img/arrow.png" : "src/img/arrow_up.png"} alt=""/>
            </a> 
          </h3>
          {this.props.mobileHeader.showPort && <ul className= {style.mSubList}>
            <li className={style.port}><a className={style.bt} href=""><img src="src/img/all.png" alt=""/><br/>평형대별</a></li>
            <li className={style.port}><a className={style.brBt} href=""><img src="src/img/section.png" alt=""/><br/>공간별</a></li>
          </ul>}
          <h3>
            <a href="#">
              a:m Picks
            </a> 
          </h3>
          <div className={style.board}>
            <a href="">Board</a>
            <a className={style.br}href="">FAQ</a>
          </div>
          <div className={style.sns}>
            <a href=""><img src="src/img/blog.png" alt=""/></a>
            <a href=""><img src="src/img/insta.png" alt=""/></a>
            <a href=""><img src="src/img/fb.png" alt=""/></a>
          </div>
        </div>
        }
      </header>
    )
  }
};
