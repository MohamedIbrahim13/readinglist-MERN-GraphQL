import React, { useState } from "react";
//import { graphql } from "graphql";
import { useQuery,useMutation } from "@apollo/client";
import { AUTHORS_QUERY,ADD_BOOK,BOOKS_QUERY } from "../queries/query";

const AddBook = () => {
  const [addBook] = useMutation(ADD_BOOK);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const {data,loading } = useQuery(AUTHORS_QUERY);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name, genre, authorId);
    addBook({variables:{name:name,genre:genre,authorId:authorId},refetchQueries:[{query:BOOKS_QUERY}]});
    setName('');
    setGenre('');
    setAuthorId('');
  };
  //console.log(useMutation(ADD_BOOK));
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          value={genre}
          type="text"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select author</option>
          {loading ? (
            <option disabled>Loading authors</option>
          ) : (
            data.authors.map((author) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })
          )}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
