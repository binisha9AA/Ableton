import React from 'react';
import './abou_text.css';
export default function About_text({ heading, paragraph }) {
  return (
    <>
      <h2 className="heading">{heading}</h2>
      <p className="paragraph">{paragraph}</p>
    </>
  );
}
