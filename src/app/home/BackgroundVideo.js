import React, { Component } from 'react';
// import styles from './BackgroundVideo.css';

class BackgroundVideo extends Component {
  render() {
    return (
      <div className="homepage-hero-module">
        <div className="video-container">
          <div className="filter"></div>
          <video autoPlay loop className="fillWidth">
             <source src="media/landing/Into_the_Wild.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
             <source src="media/landing/Into_the_Wild.wedm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="poster hidden">
             <img src="media/landing/Into_the_Wild.ogv" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default BackgroundVideo;
