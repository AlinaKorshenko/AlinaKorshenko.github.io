let likeMovies = [];
let dislikeMovies = [];


const setup = () => {

    addMovie();
}
window.addEventListener("load", setup);


const addMovie = () => {


    const movieList = document.getElementById("movielist");

    movies.forEach((movie, index) => {

        const movieDiv = createElement("div", "movie");
        const title = createElement("p", "title", movie.title);
        const image = createElement("img", "image");
        image.setAttribute("src", movie.imageUrl)
        const description = createElement("p", "description", movie.description);
        const score = createElement("div", "buttons");

        const likeButton = createIconButton("fas fa-thumbs-up" , () => like(movie.title));
        const disLikeButton = createIconButton("fas fa-thumbs-down",  () => dislike(movie.title))



        score.appendChild(likeButton);
        score.appendChild(disLikeButton);


        movieDiv.appendChild(title);
        movieDiv.appendChild(score);
        movieDiv.appendChild(image);
        movieDiv.appendChild(description);
        movieList.appendChild(movieDiv);
     });

    }

    const createIconButton = (classI, klickMetheode) =>{
        let e = document.createElement("i");
        e.setAttribute("class", classI);
        e.classList.add("button");
        e.classList.add("unset");

        e.addEventListener("click", klickMetheode);

        return e;
    }


 const createElement = (element, className ="", text ="") => {

     let e = document.createElement(element);
     e.setAttribute("class", className);
     if(text !== ""){

         let txt = document.createTextNode(text);
         e.appendChild(txt);
     }
     return e;
}


const like =(title) => {

    const i = movieIndex(title); // een methode makenlikeMovoes.
    const found = likeMovies.findIndex(m => m.title === title);
    if(found === -1){

        likeMovies.push(movies[i]);

    }

    let aantalLikes = document.getElementById("like");
    aantalLikes.textContent = likeMovies.length.toString();

    let buttons = document.getElementsByClassName("button");
    let btnNodig = buttons[((i+1)*2-1)-1];
    btnNodig.style.color = "green";


}

const dislike =(title) => {
    const i = movieIndex(title); // een methode makenlikeMovoes.
    const found = dislikeMovies.findIndex(m => m.title === title);
    if(found === -1){

        dislikeMovies.push(movies[i]);

    }

    let aantalLikes = document.getElementById("dislike");
    aantalLikes.textContent = dislikeMovies.length.toString();


    let buttons = document.getElementsByClassName("button");
    let btnNodig = buttons[((i+1)*2)-1];
    btnNodig.style.color = "red";
}



const movieIndex =(title) => {

    let i;

    movies.forEach((movie, index) => {

        if (movie.title === title) {

            i=  index;
        }
    })

    return i;
}





