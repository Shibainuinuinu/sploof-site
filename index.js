let moviesButton = document.getElementById("moviesButton");
let gamesButton = document.getElementById("gamesButton");
let musicButton = document.getElementById("musicButton");

moviesButton.onclick = function(){
    location.href = "pages/movies.html";
}
gamesButton.onclick = function(){
    location.href = "pages/games.html";
}
musicButton.onclick = function(){
    location.href = "pages/music.html";
}