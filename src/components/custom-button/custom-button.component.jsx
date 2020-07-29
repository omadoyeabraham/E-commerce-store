import React from "react";

/**
 * Custom button
 *
 * @param {*} props
 * @type presentational component
 */
const CustomButton = ({ children, ...otherProps }) => {
  const colors = ["blue", "gray", "red"];
  const colorsIntensity = {
    blue: [500, 700],
    gray: [800, 900],
  };

  const color =
    otherProps.color && colors.includes(otherProps.color)
      ? otherProps.color
      : "gray";

  // Used to apply varying levels of a particular color as found in tailwindcss
  const intensity = colorsIntensity[color];

  return (
    <button
      {...otherProps}
      className={
        "text-white font-bold py-4 px-8 focus:outline-none focus:shadow-outline text-xl uppercase " +
        `border bg-${color}-${intensity[0]} hover:text-${color}-${intensity[0]} hover:bg-white hover:border-${color}-${intensity[0]}`
      }
    >
      {children}
    </button>
  );
};

export default CustomButton;
