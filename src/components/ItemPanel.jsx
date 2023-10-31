import React, { useEffect, useState } from 'react';
import '../App.css'; // Import your CSS file

const ItemPanel = ({ selectedItem, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedItem]);

  return (
    <div className={`item-panel ${isVisible ? 'show' : ''}`}>
      <div className="item-details">
        <h1>{selectedItem ? selectedItem.itemName : ''}</h1>
        <p>Year: {selectedItem ? selectedItem.itemYear : ''}</p>
        <div className="item-copy">
          <div className='item-images'>
            {selectedItem && selectedItem.itemImg.length > 0 && (
              selectedItem.itemImg.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
              ))
            )}
          </div>
          <p dangerouslySetInnerHTML={{ __html: selectedItem ? selectedItem.itemCopy : '' }} />
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ItemPanel;

