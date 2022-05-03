import React, {useState} from 'react';
import Header from './components/Header'
import AddBook from './components/AddBook'
import Content from './components/Content'
import data from './data.json'

export default function App() {
  const [books, setBooks] = useState(data)
  
  const addBook = (book) => {
    let books1 = [...books, book]
    setBooks(books1)
  }

  const comp_title = (t1, t2) => {
    if(t1.title > t2.title){
      return 1
    }else if(t1.title < t2.title){
      return -1
    }else {
      return 0
    }
  }

  const comp_author = (t1, t2) => {
    if(t1.author > t2.author){
      return 1
    }else if(t1.author < t2.author){
      return -1
    }else {
      return 0
    }
  }

  const comp_rating = (t1, t2) => {
    if(t1.rating > t2.rating){
      return -1
    }else if(t1.rating < t2.rating){
      return 1
    }else {
      return 0
    }
  }

  const sortBy = (by) => {
    let newBooks=books.map(e => e)
    if(by === "Title"){
      newBooks.sort(comp_title)
    }else if(by === "Author"){
      newBooks.sort(comp_author)
    }else{
      newBooks.sort(comp_rating)
    }
    setBooks(newBooks)
  }

  const addRating = (id) => {
    let newBooks=books.map(e => e)
    for (var i = 0; i < newBooks.length; i++){
      if(newBooks[i].id===id){
        if(newBooks[i].rating!==10){
          newBooks[i].rating+=1
        } else{
          newBooks[i].rating=1
        }
      }
    }
    setBooks(newBooks)
  }

  const delElement = (id) => {
    let newBooks=books.map(e => e)
    for (var i = 0; i < newBooks.length; i++){
      if(newBooks[i].id===id){
        newBooks.splice(i, 1)
      }
    }
    setBooks(newBooks)
  }
  return (
    <div className="App">
      <Header />
      <AddBook addBook={addBook} sortBy={sortBy}/>
      <Content books={books} delElement={delElement} addRating={addRating} />
    </div>
  );
}