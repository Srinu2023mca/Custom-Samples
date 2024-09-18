import React from 'react'

const Sample1 = () => {
  return (
    <div>
       <div>
  <span className="absolute left-0 top-0 z-[-1]">
    <svg
      width="300"
      height="250"
      viewBox="0 0 300 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M0 0L300 150L150 300L0 0Z"
        fill="url(#paint0_linear_sample1)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_sample1"
          x1="0"
          y1="150"
          x2="300"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F77F00" />
          <stop offset="1" stopColor="#F77F00" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </span>
  <span className="absolute right-0 top-0 z-[-1]">
    <svg
      width="600"
      height="260"
      viewBox="0 0 600 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M600 0L0 260L300 130L600 0Z"
        fill="url(#paint1_linear_sample1)"
      />
      <defs>
        <linearGradient
          id="paint1_linear_sample1"
          x1="600"
          y1="130"
          x2="300"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A6F7" />
          <stop offset="1" stopColor="#00A6F7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </span>
</div>
 
    </div>
  )
}

export default Sample1