import { gql } from "@apollo/client";

const BOOKS_QUERY = gql`
  query getBooksQuery {
    books {
      name
      id
    }
  }
`;

const AUTHORS_QUERY = gql`
  query getAuthorsQuery {
    authors {
      name
      id
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const SINGLE_BOOK_QUERY = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { BOOKS_QUERY, AUTHORS_QUERY, ADD_BOOK, SINGLE_BOOK_QUERY };
