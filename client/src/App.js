/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import SavedList from './Movies/SavedList'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState([])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  }

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route
        path='/movies/:id'
        render={props => <Movie {...props} list={savedList} />}
      />
    </div>
  )
}

export default App
