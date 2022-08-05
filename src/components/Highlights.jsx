import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./subcomponents/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Simple"
              para="Get access to the book you purchased instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book" />}
              title="10,000+ Books"
              para="Library has books in all your favorite categories and genres"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on a new book for as little as $10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
