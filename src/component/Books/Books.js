import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Books.css";
import { useSelector } from "react-redux";
const baseUrl = "https://www.googleapis.com/books/v1";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("programming");
  // const [searchTerm, setSearchTerm] = useState("");
  const searchTerm = useSelector((state) => state.cart.searchTerm);
  const currentBooks = books.filter((book) =>
    book.volumeInfo.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch(`${baseUrl}/volumes?q=${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [filter]);
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <div className="catalog-container">
        <div className="filter-container">
          <h5>{filter.charAt(0).toUpperCase() + filter.slice(1)} Books</h5>
          <div>
            <label htmlFor="filter">Filter by: </label>
            <select id="filter" value={filter} onChange={handleFilterChange}>
              <option value="programming">Programming</option>
              <option value="fiction">Fiction</option>
            </select>
          </div>
        </div>

        <ul>
          {currentBooks.map((book) => (
            <li key={book.id} className="book-box">
              <Link to={`/book/${book.id}`}>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <p>Book Name:- {book.volumeInfo.title}</p>
                <p className="author">
                  Author:- {book?.volumeInfo?.authors[0]}
                </p>
                <p className="price">
                  Price:- ${book?.saleInfo?.retailPrice?.amount}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Books;
