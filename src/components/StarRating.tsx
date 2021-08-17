import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarRating() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: any) => {
    setRating(rate)
  }
  return (
    <div className="rating">
      <Rating 
        onClick={handleRating} 
        ratingValue={rating}
        stars={5}
        size={24}
      />
    </div>
  );
}