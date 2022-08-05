import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Rating from "../components/subcomponents/Rating";
import Price from "../components/subcomponents/Price";
import Book from "../components/subcomponents/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookInCart() {
    return cart.find((book) => +book.id === +id);
  }
  return (
    <div>
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <Link to="/books" className="book__link">
                  <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/books" className="book__link">
                  <h2 className="book__selected--title--top">
                    Back to <span className="purple">Books</span>
                  </h2>
                </Link>
              </div>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img src={book.url} alt="" className="book__selected--img" />
                </figure>
                <div className="book__selected--description">
                  <h2 className="book__selected--title">{book.title}</h2>
                  <Rating rating={book.rating} />
                  <div className="book__selected--price">
                    <Price
                      originalPrice={book.originalPrice}
                      salePrice={book.salePrice}
                    />
                  </div>
                  <div className="book__summary">
                    <h3 className="book__summary--title">Summary</h3>
                    <p className="book__summary--para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolor aspernatur quis hic perspiciatis amet saepe repellat
                      numquam soluta ratione natus tenetur molestiae enim
                      expedita, quos aliquam itaque animi eveniet libero.
                    </p>
                    <p className="book__summary--para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolor aspernatur quis hic perspiciatis amet saepe repellat
                      numquam soluta ratione natus tenetur molestiae enim
                      expedita, quos aliquam itaque animi eveniet libero.
                    </p>
                    {bookInCart() ? (
                      <Link to="/cart">
                      <button className="btn">View Cart</button>
                      </Link>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => addBookToCart(book)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title--top">
                  Reccomended Books
                </h2>
              </div>
              <div className="books">
                {books
                  .filter((book) => book.rating === 5 && +book.id !== +id)
                  .slice(0, 4)
                  .map((book) => (
                    <Book book={book} key={book.id} />
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookInfo;
