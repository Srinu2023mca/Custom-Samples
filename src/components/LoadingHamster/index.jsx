import React from 'react';
import './style.css'; // Make sure to link your CSS file if you're using external styles

const HamsterWheel = () => {
  return (
    <div>
      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster_body">
            <div className="hamster_head">
              <div className="hamster_ear"></div>
              <div className="hamster_eye"></div>
              <div className="hamster_nose"></div>
            </div>
            <div className="hamster_limb hamster_limb--fr"></div>
            <div className="hamster_limb hamster_limb--fl"></div>
            <div className="hamster_limb hamster_limb--br"></div>
            <div className="hamster_limb hamster_limb--dl"></div>
            <div className="hamster_tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <h2>L o a d i n g . . .</h2>
    </div>
  );
};

export default HamsterWheel;
