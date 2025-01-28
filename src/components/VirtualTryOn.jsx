import { useState } from "react"

function VirtualTryOn() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
        isHovered ? "bg-blue-600 scale-110" : "bg-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <span
          className={`text-white text-xs text-center absolute -top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 px-4 py-2 rounded transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Try Clothes Virtually
        </span>
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </button>
  )
}

export default VirtualTryOn

