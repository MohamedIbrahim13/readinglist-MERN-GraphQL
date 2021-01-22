import React from "react";
import { useQuery } from "@apollo/client";
import { SINGLE_BOOK_QUERY } from "../queries/query";

const BookDetails = ({ bookId }) => {
  const { data } = useQuery(SINGLE_BOOK_QUERY, {
    variables: { id:bookId }
  });
  console.log(data,bookId);
  return (
    <div id="book-details">
      {data ? (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div>No book selected...</div>
      )}
    </div>
  );
};

export default BookDetails;
