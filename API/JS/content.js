// Create an AJAX or Fetch request that writes
// data to the #results section


var search;

//First you must create XMLHttpRequest object
var xhr = new XMLHttpRequest();

//when the response has loaded the function will run

xhr.onload = function () {
   
    
    //This condition is if you are loading from a server. If running loacally you can comment out
     if (xhr.status === 200) { //this is check if server status is ok
        
        //create a var to store JSON data
        var responseObject = JSON.parse(xhr.responseText);
         
         
var apiData='';

         apiData +='<p id="ResultsTitle" >Results for '+search.value+'</p>';
         apiData +='<ul class="MovieDetails"><div class="MovieDiv">';
for( var i = 0; i < responseObject.results.length; i++)
         {
    
        
              apiData +='<li>';
             if(responseObject.results[i].poster_path === null){
                 apiData +='<img src="/search-assets/concert-photo.jpg">';
             } else{
              apiData +='<img src="https://image.tmdb.org/t/p/w300'+responseObject.results[i].poster_path+'">';}
             apiData +='<h2>Title: '+responseObject.results[i].original_title+'</h2>';
              apiData +='<h3>Release Date: '+responseObject.results[i].release_date+'</h3>';
              apiData +='</li> ';
             
            
         }
 apiData +='</div></ul>';
if(document.getElementById('results')){
         //update the page with the new content
         var listUpdated = document.getElementById('results');
        listUpdated.innerHTML = apiData;
         } 
     }
     };

//search event listeners
document.getElementById("searchInput").addEventListener("search", SearchFunction);
document.getElementById("button").addEventListener("click",SearchFunction);

//function to input search text
function SearchFunction() {
    document.clear();
    search = document.getElementById("searchInput");
    //prepare the request 
    event.preventDefault();
xhr.open ('GET','https://api.themoviedb.org/3/search/movie?api_key=01b7287a4e8d89aa13eac1e37af27329&language=en-US&query='+search.value,true);
//send the request
xhr.send(null); // no data needs to be sent to server
    }






