const fs = require("fs");
// const stringMovieArr = fs.readFileSync("./storage.jason");
let movieArray;

const getMovieData = () => {
    try {
        movieArray = JSON.parse(fs.readFileSync("./storage.json"))
    }   catch (error) {
        movieArray = []
    }
}

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
    save() {
        //save movie arrray to json file
        fs.writeFileSync("./storage.json", JSON.stringify(movieArray));
        ("");
    }
}

module.exports = { Movie, getMovieData };