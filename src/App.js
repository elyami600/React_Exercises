import React, { Component } from 'react';
import './App.css';
//import logo from './logo.svg';


/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
 Jane Cruz's favorite movie is Planet Earth 1.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};
/*
Jane Cruz's favorite movie is "Planet Earth 1."

Matthew Johnson's favorite movie is "Planet Earth 1."

John Doe's favorite movie is "Get Out."

Lauren Carlson's favorite movie is "Selma."

Autumn Green's favorite movie is "Get Out."

Nicholas Lain's favorite movie is "Forrest Gump."
*/
// learn how to access array and display in UI
class App extends Component {
 class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <h1>Favorite Movie</h1>
          {profiles.map((profile) => ( 
            <li>{users[profile.id].name}'s favorite movie is {movies[profile.favoriteMovieID].name} </li>
            ))}
        </ul>
      </div>
    )
  }
}
export default App;