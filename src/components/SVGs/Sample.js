import React from 'react'

const Sample = () => {
  return (
    <div>
        {Array.from({ length: 50 }).map((_, i) => (
  <div key={i}>
    <span className="absolute left-0 top-0 z-[-1]">
      <svg
        width={`${Math.floor(Math.random() * 300) + 200}`}
        height={`${Math.floor(Math.random() * 200) + 150}`}
        viewBox="0 0 287 254"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d={`M${Math.random() * 300} 0L${-Math.random() * 100} 254L0 69L${Math.random() * 300} 0Z`}
          fill={`url(#paint0_linear_${i})`}
        />
        <defs>
          <linearGradient
            id={`paint0_linear_${i}`}
            x1="-40"
            y1="117"
            x2="301"
            y2="-97"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            <stop offset="1" stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span className="absolute right-0 top-0 z-[-1]">
      <svg
        width={`${Math.floor(Math.random() * 700) + 500}`}
        height={`${Math.floor(Math.random() * 300) + 200}`}
        viewBox="0 0 628 258"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          d={`M${Math.random() * 700} 257L345 31L524 -15L${Math.random() * 700} 257Z`}
          fill={`url(#paint0_linear_0_${i})`}
        />
        <path
          opacity="0.1"
          d={`M0 182L101 -15L142 81L0 182Z`}
          fill={`url(#paint1_linear_0_${i})`}
        />
        <defs>
          <linearGradient
            id={`paint0_linear_0_${i}`}
            x1="644"
            y1="221"
            x2="429"
            y2="37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            <stop offset="1" stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={`paint1_linear_0_${i}`}
            x1="18"
            y1="166"
            x2="105"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
            <stop offset="1" stopColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
))}




    </div>
  )
}

export default Sample