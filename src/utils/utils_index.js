const movieArray = [];

class Movie {
    constructor(title, director = "Judas Booth", misc = "") {
        this.title = title;
        this.director = director;
        this.misc = misc;
    }
    add() {
        movieArray.push(this);
        // console.log(movieArray);
    }
    list() {
        console.log(movieArray);
    }
}

module.exports = Movie