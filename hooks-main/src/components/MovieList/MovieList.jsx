import { useState } from "react"

import './MovieList.css'

export default function MovieList({list }) {
  return (
    <div className="movie-list">
      {list.map(movie => (
          <div key={movie.id}>
            <div>
              <img src={movie.posterURL} alt="movie-img" />
            </div>
            <div>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>{movie.rating}</p>
            </div>
        </div>
      ))}
    </div>
  )
}
