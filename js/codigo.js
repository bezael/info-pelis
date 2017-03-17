  $(document).ready(()=> {

  	$('#searchForm').on('submit',(e)=>{
  	  let searchText = $('#searchText').val();
  	  getMovies(searchText);
  	  e.preventDefault();
  	});

  	function getMovies(searchText){
  	  
  	  let urlBuscar = "http://www.omdbapi.com/?s=" + searchText;

  	  axios.get(urlBuscar)
  	    .then((response) => {
  	      let movies = response.data.Search;
  	      let output='';
  	      // console.log(response);
  	      $.each(movies, (index, movie) =>{
  	        output +=`
  	          <div class="col-md-3">
  	            <div class="well text-center">
  	              <img src="${movie.Poster}">
  	              <h5>${movie.Title}</h5>
  	              <a onclick="buscarPeli('${movie.imdbID}')" class="btn btn-primary">Detalles Pelicula</a>
  	            </div>
  	          </div>
  	        `; 
  	      }); /// eachLOOP
  	      $('#movies').html(output);


  	    })
  	    .catch((err) => {
  	      console.log(err);
  	    });
  	}

});
