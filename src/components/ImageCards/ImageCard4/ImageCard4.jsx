import React from 'react';
import topimage from '../../../assets/images/photo-8.jpg';
import './ImageCard4.css';
import { FiChevronRight } from 'react-icons/fi';
export const ImageCard4 = () => {
  return (
    <div className="imgtext_card">
      <div className="top_image">
        <img src={topimage} alt="" className="job_image" />
      </div>
      <div className="bottom_text">
        <h3 className="img_text">
          We're really proud of the work we've done so far. But there's so much
          more to come. If you'd like to be a part of it,please join us.
        </h3>
        <section className="link">
          <a href="">See Latest Jobs </a>
          <FiChevronRight />
        </section>
      </div>
    </div>
  );
};
