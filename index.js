const search = document.getElementById("search");
const button = document.getElementById("button");
const result = document.getElementById("result");

let getMovie = ()=>{

const movieName=search.value;
const url = `https://www.omdbapi.com/?t=${movieName}&apikey=92149aba`;

if(movieName.length <= 0)
{
    result.innerHTML=`<h1>Please enter movie name</h1>`;
}

else{
fetch(url)
.then((resp) => resp.json())
.then((data) => {
   if (data.Response === "True")
   {
       displayDetails(data);
   }
   else
   {
       displayError("Sorry Movie Not Found !!");
   }
})

.catch((error) => {
    displayError( error );
});

}

search.value="";
};


const displayDetails = (data)=>{
    result.innerHTML= `
    <div class= "info"> 
        <img src=${data.Poster} alt="poster" class="poster">
    <div>
        <h2>${data.Title}</h2>
        <div class="rating">
        <img src="star.png"
            <h4>${data.imdbRating} </h4>
        </div>
        <div class= "details"> 
        <span>${data.Rated}</span>
        <span>${data.Year}</span>
        <span>${data.Runtime}</span>
        </div>
        <div class="genre">
        <div>${data.Genre.split(",").join("</div> <div>")}
        
        </div>
    </div>
    </div>
    </div>
    <h3>Plot:</h3>
    <p> ${data.Plot}</p><br>
    <h3>Cast: </h3>
    <p> ${data.Actors}</p>
   
    `;
}

function displayError(error) {
    result.innerHTML = `<h1>${error}</h1>`;
}

button.addEventListener("click", getMovie);
