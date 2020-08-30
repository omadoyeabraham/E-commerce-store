import React from "react";

/**
 * Higher Order component with spinning loader
 */
const withLoadingSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) =>
    isLoading ? (
      <div className="spinner-overlay w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span
          className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
          style={{ top: "45%" }}
        >
          <svg
            className="animate-spin h-12 w-12 bg-gray-900"
            viewBox="0 0 24 24"
          ></svg>
        </span>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );

  return spinner;
};

export default withLoadingSpinner;
