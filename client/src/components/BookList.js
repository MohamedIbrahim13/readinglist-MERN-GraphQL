import React, { useState } from "react";
//import {graphql} from 'graphql';
import { useQuery } from "@apollo/client";
import { BOOKS_QUERY } from "../queries/query";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { data, loading } = useQuery(BOOKS_QUERY);
  const [selected,setSelected] = useState(null);
  //console.log(data);
  
  return (
    <div>
      <ul id="book-list">
        {loading ? (
          <div>Loading books...</div>
        ) : (
          data.books.map((book) => {
            return <li key={book.id} onClick={ e => setSelected(book.id)}>{book.name}</li>;
          })
        )}
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default BookList;
