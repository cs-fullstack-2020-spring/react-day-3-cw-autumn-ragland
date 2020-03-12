import React, { Component } from 'react';
import Movies from './Movies';
import Albums from './Albums';

class Favorites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let favMovie = prompt("What's your favorite movie");
        let secondFavMovie = prompt("What's your second favorite movie");
        let favAlbum = prompt("What's your favorite album");
        let secondFavAlbum = prompt("What's your second favorite album");

        let movieArray = [favMovie, secondFavMovie];
        let albumArray = [favAlbum, secondFavAlbum];
        return (
            <div>
                <h1>Favorites</h1>
                <div className = "favGrid">
                    <Movies movies={movieArray} className = "movieFaves"/>
                    <Albums albums={albumArray} className = "albumFaves"/>
                </div>
            </div>
        )
    }
}

export default Favorites;