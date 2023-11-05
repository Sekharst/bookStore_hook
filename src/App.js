import {Component} from 'react'
import { Route, Routes} from 'react-router-dom'
// import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import BookShelves from './components/BookShelves'
import MyFavorites from './components/MyFavorites'
import BookItemDetails from './components/BookItemDetails'
import FavoriteContext from './Context/FavoriteContext'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {favoriteList: []}

  onToggleFavorite = bookDetails => {
    const {favoriteList} = this.state
    const isAlreadyExist = favoriteList.some(
      eachItem => eachItem.id === bookDetails.id,
    )

    if (isAlreadyExist === true) {
      this.setState(prevState => ({
        favoriteList: prevState.favoriteList.filter(
          eachBook => eachBook.id !== bookDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        favoriteList: [...prevState.favoriteList, bookDetails],
      }))
    }
  }

  render() {
    const {favoriteList} = this.state

    return (
      <FavoriteContext.Provider
        value={{
          favoriteList,
          onToggleFavorite: this.onToggleFavorite,
        }}
      >
      <div>
        <Routes>
         <Route exact path="/login" element={<LoginForm />}/>
          <Route exact path="/" element={<Home />}/>
          
            <Route exact path="/shelf" element={<BookShelves/>}/>
            <Route exact path="/favorite" element={<MyFavorites/>}/>
            <Route exact path="/books/:id" element={<BookItemDetails/>}/>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </div>
      </FavoriteContext.Provider>
    )
  }
}

export default App
