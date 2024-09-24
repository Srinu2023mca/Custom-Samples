import React from 'react';
import './style.css'; // Make sure to link your CSS file if you're using external styles

const HamsterWheel = () => {
  return (
    <div className='main-container'>
       <div className='loader'>
      <span style={{ '--i': 1 }}>L</span>
      <span style={{ '--i': 2 }}>o</span>
      <span style={{ '--i': 3 }}>a</span>
      <span style={{ '--i': 4 }}>d</span>
      <span style={{ '--i': 5 }}>i</span>
      <span style={{ '--i': 6 }}>n</span>
      <span style={{ '--i': 7 }}>g</span>
      <span style={{ '--i': 8 }}>.</span>
      <span style={{ '--i': 9 }}>.</span>
      <span style={{ '--i': 10 }}>.</span>
    </div>
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
     
    </div>
  );
};

export default HamsterWheel;
