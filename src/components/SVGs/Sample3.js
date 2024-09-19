import React from 'react';

const Sample3 = () => {
  return (
    <div className='sample3'>
      {/* Circle with gradient */}
      <span className="absolute left-0 top-0 z-[-1]">
        <svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#paint_circle)"
            opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint_circle"
              x1="50"
              y1="50"
              x2="150"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6A95" />
              <stop offset="1" stopColor="#FF6A95" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* Rectangle with gradient */}
      <span className="absolute right-100 top-0 z-[-1]">
        <svg
          width="150"
          height="100"
          viewBox="0 0 150 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="200"
            height="80"
            fill="blue"
            opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint_rect"
              x1="0"
              y1="0"
              x2="200"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* Polygon with gradient */}
      <span className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            fill="url(#paint_polygon)"
            opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint_polygon"
              x1="0"
              y1="0"
              x2="200"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8E53" />
              <stop offset="1" stopColor="#FF8E53" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* Ellipse with gradient */}
      <span className="absolute right-0 bottom-0 z-[-1]">
        <svg
          width="300"
          height="150"
          viewBox="0 0 300 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="150"
            cy="75"
            rx="120"
            ry="50"
            fill="url(#paint_ellipse)"
            opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint_ellipse"
              x1="30"
              y1="25"
              x2="270"
              y2="125"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A3A1FF" />
              <stop offset="1" stopColor="#A3A1FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      {/* Star with gradient */}
      <span className="absolute right-0 top-0 z-[-1]">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,0 61,35 100,35 67,57 77,90 50,70 23,90 33,57 0,35 39,35"
            fill="url(#paint_star)"
            opacity="0.1"
          />
          <defs>
            <linearGradient
              id="paint_star"
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default Sample3;
