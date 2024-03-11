import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    handleFilter({ title: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    handleFilter({ title, rating: parseFloat(e.target.value) });
  };

  return (
    <div className="filter">
      <input type="text" placeholder="Search by title" value={title} onChange={handleTitleChange} />
      <input type="number" placeholder="Search by rating" value={rating} onChange={handleRatingChange} />
    </div>
  );
};

export default Filter;
