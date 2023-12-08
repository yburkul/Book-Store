import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./bookDetails.css";
import { addToCart } from "../redux/redux";
import { useDispatch } from "react-redux";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const baseUrl = "https://www.googleapis.com/books/v1";

  useEffect(() => {
    const bookId = id;
    fetch(`${baseUrl}/volumes/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Book Details:", data);
        setBook(data);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <>
      <div className="book-container">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        <div className="book-details">
          <h2>Book Name:- {book?.volumeInfo?.title}</h2>
          <p>Subtitle:- {book?.volumeInfo?.subtitle}</p>
          <p>Book Author:- {book?.volumeInfo?.authors[0]}</p>
          <p>Categories:- {book?.volumeInfo?.categories[0]}</p>
          <p>Price:- ${book?.saleInfo?.retailPrice?.amount}</p>
          <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
