import './Filter.css';
import { useState } from 'react';

function Filter({ selectedSizes, setSelectedSizes }) {


  const handleSizeToggle = (size) => {
    setSelectedSizes(prevSizes => {
      if (prevSizes.includes(size)) {
        return prevSizes.filter(prevSize => prevSize !== size);
      } else {
       
        return [...prevSizes, size];
      }
    });
  };

  return (
    <div className='filter-container'>
      <div className='size-toggle-buttons'>
        <button
          className={`size-toggle-btn ${selectedSizes.includes('Small') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Small')}
        >
          Small
        </button>
        <button
          className={`size-toggle-btn ${selectedSizes.includes('Medium') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Medium')}
        >
          Medium
        </button>
        <button
          className={`size-toggle-btn ${selectedSizes.includes('Large') ? 'active' : ''}`}
          onClick={() => handleSizeToggle('Large')}
        >
          Large
        </button>
      </div>
    </div>
  );
}

export default Filter;
