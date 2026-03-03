import React from 'react';
import './VideoSection.css';

export default function VideoSection() {
  return (
    <section className="section section-dark" id="videos">
      <div className="container">
        <div className="fb-video-wrap">
          <video
            className="fb-video-frame"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/ironc-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
