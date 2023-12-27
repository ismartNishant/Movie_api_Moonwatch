import React from "react";

const MovieCard = ({ movie :  { imdbID, Year, Poster, Title,Type }}) => {
  return (
    <div className="movie" key={imdbID} >
      <div className="card border-0 ">
        <div className="layer">
          <p className="card-text year position-absolute text-white  px-3 py-1  mb-0">
            Year : {Year}
          </p>
        </div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          className="card-img-top "
          alt={Title}
        />

        <div className="card-body w-100 p-2 position-absolute bottom-0">
          <p className="card-text mb-1 M-type ">{Type}</p>
          <h5 className="card-title">{Title}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;