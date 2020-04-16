import React from 'react';
import './App.css';

function Reviews() {
  const users = [
    {
      'id': 1,
      'name': 'Masayoshi',
      'review': 'Harganya murah tapi kualitas bukan kaleng-kalengan nih. Keren.'
    },
    {
      'id': 2,
      'name': 'Shayna',
      'review': 'Harganya murah tapi kualitas bukan kaleng-kalengan nih. Keren.'
    },
    {
      'id': 3,
      'name': 'Kevin',
      'review': 'Harganya murah tapi kualitas bukan kaleng-kalengan nih. Keren.'
    }
  ];

  const listReview = users.map((review) => 
    <div key={review.id} className="Item">
      <img src="face.jpg" />
      <div className="User">
        <h3>{review.name}</h3>
        <p>{review.review}</p>
      </div>
    </div>
  );

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;