import React from 'react';
import star from '../images/star.png'

export default function Book(props) {
    const delElement = () => {
        props.delElement(props.id)
    }
    const addRating = () => {
        props.addRating(props.id)
    }
    return (
        <div className="component">
            <img src={props.img} alt="img" className="comp-img"/>
            <p className="comp-title">{props.title}</p>
            <p className="comp-author">{props.author}</p>
            <div className="comp-func">
                <img onClick={addRating}  src={star} alt="" className="comp-star" />
                <p className="comp-rating">{props.rating}</p>
            </div>
            <img onClick={delElement} src="images/close.png" alt="" className="comp-close"/>
        </div>
  );
}