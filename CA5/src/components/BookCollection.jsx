// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BookCollection.css';

const BookCollection = () => {
  const [bookList, setBookList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { Authorization: 'whatever-you-want' }
        });
        setBookList(response.data.books);
      } catch (error) {
        console.error("Error fetching the books!", error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchInput = (event) => setSearchInput(event.target.value.toLowerCase());

  const filteredBookList = bookList.filter(book =>
    book.title.toLowerCase().includes(searchInput)
  );

  return (
    <div>
      <header className="page-header">
        <div className="header-wrapper">
          <h1>Kalvium_Books</h1>
          <input type="text" placeholder="Search Books" value={searchInput} onChange={handleSearchInput} />
          <Link to="/register">
            <button className="signup-button">Register</button>
          </Link>
        </div>
      </header>
      <div className="book-gallery">
        {filteredBookList.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title} />
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>*Free</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCollection;
