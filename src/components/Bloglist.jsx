import React, { useState } from 'react';
import '../App.css'; // You can create a separate CSS file for this component
import { blogData } from '../blogData'; // Import the data
import ItemPanel from './ItemPanel'; // Import the ItemPanel component
const Bloglist = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const onClosePanel = () => {
    setSelectedItem(null);
  };

  return (
    <>    
    <div className="container">
      <div className="items">
        {blogData.map((item) => (
          <div key={item.id}>
            <div className="item" onClick={() => onItemClick(item)}>
              <div className="item-index">{item.itemIndex}</div>
              <div className="item-name">{item.itemName}</div>
              <div className="item-year">{item.itemYear}</div>
            </div>
            <hr /> {/* Add the horizontal line here */}
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemPanel selectedItem={selectedItem} onClose={onClosePanel} />
      )}
    </div>
    </>
  );
};

export default Bloglist;
