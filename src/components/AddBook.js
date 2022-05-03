import React, {useState} from 'react';
import star from '../images/star.png'

export default function AddBook(props) {
    const [book_id, setbookId] = useState(6)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [rating, setRating] = useState("")
    const addBook = (event) => {
        event.preventDefault()
        const book = {
            id: book_id,
            title: event.target[0].value,
            author: event.target[1].value,
            //img: event.target[2].value,
            img: URL.createObjectURL(event.target[2].files[0]),
            rating: parseInt(event.target[3].value,10)
        }
        setbookId(book_id+1)
        props.addBook(book)
    }

    const sortBy = () => { 
        props.sortBy(document.getElementById("select").value)
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }
    const changeAuthor = (event) => {
        setAuthor(event.target.value)
    }
    const changeRating = (event) => {
        let x = Math.max(1,Math.min(10, event.target.value))
        setRating(x)
    }

    return (
            <div className="addbook">
                <form onSubmit={addBook} className="form">
                        <h1 className="add--title">Add new book or search by data!</h1>
                        <div className="inputs">
                            <input
                                type="text"
                                placeholder="Title"
                                className="title--input"
                                id="title"
                                value={title}
                                onChange={changeTitle}
                            />
                            <input
                                type="text"
                                placeholder="Author"
                                className="author--input"
                                id="author"
                                value={author}
                                onChange={changeAuthor}
                            />
                            <input
                                type="file"
                                placeholder="Image"
                                className="image--input"
                                id="image"
                            />
                            <div className="rating">
                                <img src={star} alt="" className="star"/>
                                <input
                                    type="number"
                                    placeholder="Rating"
                                    className="rating--input"
                                    id="rating"
                                    value={rating}
                                    onChange={changeRating}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="butadd" type="submit">ADD</button>
                        </div>
                </form>
                <div className="sort">
                    <h1 className="add--title">Sort by:</h1>
                    <select onSubmit={sortBy} className="select" id="select">
                        <option value="Title">Title</option>
                        <option value="Author">Author</option>
                        <option value="Rating">Rating</option>
                    </select>
                    <button className="butadd" onClick={sortBy}>SORT</button>
                </div>
            </div>
  );
}
