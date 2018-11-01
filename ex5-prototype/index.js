function Movie(_title, _year) {
    this.title = _title;
    this.year = _year

}

let movie = new Movie("the scream", 1998);

console.log(8, movie);

Movie.prototype.print = function () { console.log(10, `movie`, this.title, `year ${this.year}`) }

movie.print()

let movie2 = new Movie("the scream 2", 2000);

movie2.print()

//add function with this context to the function;
function print2() {
    console.log(20, `movie`, this.title, `year ${this.year}`)
}


var title = "some global movie";
var year = "some global year";


print2.bind(movie2)();
