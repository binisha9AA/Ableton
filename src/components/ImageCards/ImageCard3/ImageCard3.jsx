import React from 'react';
import poster from '../../../assets/images/poster-meet-the-makers.jpg';
import '../ImageCard3/ImageCard3.css';
import leftimg from '../../../assets/images/photo-6-a.jpg';
import rightimg from '../../../assets/images/photo-7.jpg';
export default function ImageCard3() {
  return (
    <>
      <div className="main_container">
        <div className="background">
          <div className="left_image">
            <img src={leftimg} alt="" />
          </div>
          <div className="right_image">
            <img src={rightimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
