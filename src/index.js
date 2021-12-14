// console.log("Hello World!")
const yargs = require("yargs");
const { Movie, getMovieData } = require("./utils/utils_index");
// console.log(yargs.argv)
const args = yargs.argv

const app = () => {
        getMovieData();
    switch (args.command) {
        case "add":
            const newMovie = new Movie(args.title, args.director, args.misc);
            newMovie.add();
            newMovie.list();
            newMovie.save();
            break;
        case "addMulti":
            const newMovie1 = new Movie(args.title1, args.director1, args.misc1);
            const newMovie2 = new Movie(args.title2, args.director2);
            newMovie1.add();
            newMovie2.add();
            newMovie1.save();
            newMovie2.save();
            newMovie1.list();
            //function that adds movie info from process.argv into an array and console.logs the array.
            break;
        default:
            console.log("Incorrect command");
        }
};

app();