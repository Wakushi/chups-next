import React from "react"

const FadeDivider = ({ position = "bottom" }) => {
  return (
    <div
      className={`absolute w-full h-24 pointer-events-none ${
        position === "top"
          ? "top-0 bg-gradient-to-b from-black to-transparent z-10"
          : "bottom-0 bg-gradient-to-b from-transparent to-black z-10"
      }`}
    />
  )
}

export default FadeDivider
