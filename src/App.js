import React, { useState } from 'react'
import "./App.css";
import CardItems from './components/CardItems';
import Allcard from './utils/Allcard';
import Homeimg from './components/Homeimg';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Filter items based on the active category
  const filteredItems = Allcard.filter((item) => {
    if (activeCategory === 'all') {
      return true; // Show all items
    }
    return item.category === activeCategory;
  });

  return (
    <div>
      {/* Add buttons to select categories */}
      <Homeimg/>
      <div className='container'>
        <button onClick={() => handleCategoryChange('all')}>Show All</button>
        <button onClick={() => handleCategoryChange('lunch')}>Show Lunch</button>
        <button onClick={() => handleCategoryChange('breakfast')}>Show Breakfast</button>
        <button onClick={() => handleCategoryChange('dinner')}>Show Dinner</button>
      </div>

      {/* Render the CardItems component */}
      <CardItems activeCategory={activeCategory} items={filteredItems} />
    </div>
  );
}

export default App
