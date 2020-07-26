import React from "react";

import "./homepage.page.scss";

/**
 * Homepage
 *
 * @param {*} props
 * @type presentational component
 */
const HomePage = (props) => {
  const sections = [
    {
      id: 1,
      title: "men",
      subtitle: "shop now",
    },
    {
      id: 2,
      title: "women",
      subtitle: "shop now",
    },
    {
      id: 3,
      title: "girls",
      subtitle: "shop now",
    },
    {
      id: 4,
      title: "boys",
      subtitle: "shop now",
    },
    {
      id: 5,
      title: "tech",
      subtitle: "shop now",
    },
  ];
  return (
    <div className="homepage px-10 pt-10">
      <div className="shop-sections-list">
        {sections.map((section) => (
          <div
            key={section.id}
            className="shop-section border border-gray-700 flex flex-col justify-center items-center text-center py-12"
          >
            <div className="shop-section--content border border-gray-700 py-6 px-8">
              <h1 className="shop-section--title text-bold text-4xl uppercase">
                {section.title}
              </h1>
              <span className="shop-section--subtitle block uppercase">
                {section.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
