import React, { useState } from 'react';
import '../App.css';
import { blogData } from '../blogData';
import ItemPanel from './ItemPanel';

const Bloglist = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  const onClosePanel = () => {
    setSelectedItem(null);
  };

  const reversedBlogData = [...blogData].reverse();

  return (
    <>    
    <div className="container">
      <div className="items">
        {reversedBlogData.map((item) => (
          <div key={item.id}>
            <div className="item" onClick={() => onItemClick(item)}>
              <div className="item-index">{item.itemIndex}</div>
              <div className="item-name">{item.itemName}</div>
              <div className="item-year">{item.itemYear}</div>
            </div>
            <hr />
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
