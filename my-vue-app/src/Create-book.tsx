import React from "react";
import axios from "axios";
import ShoppingCartIcon from "./shopping-icon/shopping-icon";
export default class BooksList extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get(`https://65ad0b0dadbd5aa31bdff978.mockapi.io/api/books`)
      .then((res) => {
        const books = res.data;
        this.setState({ books });
      });

  }
  render() {
    return (
      <div className="card">
        <div className="shopping-icon">
          <ShoppingCartIcon />
        </div>
        <ul>
          {
          this.state.books.map((books) => (
            <li key={books.id}>
              {`id: `}
              {books.id} <br />
              {`expired at: `}
              {books.expiredAt} <br />
              {`author: `}
              {books.author} <br />
              {`name: `}
              {books.name} <br />
              {`description: `}
              {books.description} <br />
              <img src={books.thumbnail} />
              <button>
                add book
              </button>
              <button>remove</button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}
