
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa'
const StarRating = ({ rate }) => {
    const [rating, setRating] = useState(0)
    useEffect(() => {
        setRating(rate)
    }, [rate])
    return (
        <>
            {
                [...Array(5)].map((star, i) => {
                    const ratingVal = (i + 1) * 2;
                    return (
                        <label key={i}>
                            <input type="radio" name="rating" value={ratingVal} />
                            <FaStar className="star" size={30} color={ratingVal <= rating ? '#ffc002' : '#30303070'} />
                        </label>
                    );
                })
            }
        </>
    );
}


export default StarRating; 