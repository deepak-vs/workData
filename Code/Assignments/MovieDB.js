let prompt=require("prompt-sync")()

const movieDatabase=[]

const addMovie=(title,director,release_year)=>{
    let movie={
        title,
        director,
        release_year
    }
    movieDatabase.push(movie)
    console.log(movie.title,"Added to Database.")
}

const displayMovieByTitle=(title)=>{
    let myMovie=movieDatabase.find((movie)=>{
        return movie.title===title;
    })
    return (myMovie?myMovie:"Movie not found!");
}

const viewAllMovies=()=>{
    movieDatabase.forEach((movie)=>{
        console.log("Your Movie :: ")
        console.log("Title : ",movie.title)
        console.log("Director : ",movie.director)
        console.log("Release Year : ",movie.release_year)
        console.log()
    })
}


addMovie("Dunki","RajKumar Hirani",2023);
addMovie("Jawaan","Atlee",2023);
addMovie("Endgame","Russo Brothers",2019);
console.log(displayMovieByTitle("Jawaan"))
console.log(displayMovieByTitle("Dunki"))
viewAllMovies();

