import React from 'react'
// import { scrollToElement } from '../js/sport'
function Home() {

  return (
    <div id="home" className="home">
    <div className="hero">
      <div id="navbar" className="navbar">
        <input className="checkbox" type="checkbox" id="toggle"/>
        <div className="navbar-left">
          <img src="photos/logo.png" alt=""/>
        </div>
        <div className="navbar-right">
          <a className="nav-item" href="#"  >Home</a>
          <a className="nav-item" href="#" onClick={() => scrollToElement('home')}>Classes</a>
          <a className="nav-item" href="#" onClick={() => scrollToElement('trainers')}>Trainer</a>
          <a className="nav-item" href="#" onClick={() => scrollToElement('reviews')}>Review</a>
          <a className="nav-item" href="#" onClick={() => scrollToElement('contact-element')}>Contact</a>
          <button className="navbar-button">
            <a className="nav-item" href="#">JOIN US</a>
          </button>
        </div>
        <label htmlFor="toggle" className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
      </div>
      <div className="main-container">
        <div className="mid-area">
          <div className="mid-p">
            <h5>
              <p>POWERFULL</p>
            </h5>
            <h1>Group <br/>Practice <br/>With Trainer</h1>
            <p className="mid-p-big" style={{color: "white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Omnis, iure, libero laboriosam atque, porro necessitatibus consequatur sapiente totam est
              aliquid veritatis adipisci dolores dolor possimus quia nam quos! In asperiores fugit officiis nemo.
              Laudantium nemo consequuntur nobis eveniet minus in quos, vitae similique nihil aspernatur, necessitatibus
              quaerat cupiditate incidunt doloribus!</p>

            <div className="mid-area-buttons">
              <button className="sign-up">Sign Up</button>
              <button className="details">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom-area">
      <div className="square col-3">
        <p className="square-in-number">325</p>
        <p className="square-in-p">Course</p>
      </div>
      <div className="square col-3">
        <p className="square-in-number">405</p>
        <p className="square-in-p">Work Out</p>
      </div>
      <div className="square col-3">
        <p className="square-in-number">305</p>
        <p className="square-in-p">Working Hour</p>
      </div>
      <div className="square col-3">
        <p className="square-in-number">705</p>
        <p className="square-in-p">Happy Client</p>
      </div>
    </div>
  </div>
  )
}

export default Home
