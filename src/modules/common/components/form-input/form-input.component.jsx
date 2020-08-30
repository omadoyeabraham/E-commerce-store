import React from "react";

/**
 * Form input
 * @param {*} param0
 */
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      {label ? (
        <label
          htmlFor={otherProps.name}
          className="block text-gray-700 text-lg font-bold mb-2"
        >
          {label}
        </label>
      ) : null}
      <input
        onChange={handleChange}
        {...otherProps}
        className="shadow appearance-none border w-full py-3 px-3 text-gray-700 
        leading-tight focus:outline-none focus:shadow-outline max-w-screen-sm"
      />
    </div>
  );
};

export default FormInput;
