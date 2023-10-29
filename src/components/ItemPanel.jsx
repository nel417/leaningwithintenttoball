// import React, { useEffect, useState } from 'react';
// import '../App.css'; // You can create a separate CSS file for this component

// const ItemPanel = ({ selectedItem, onClose }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (selectedItem) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [selectedItem]);

//   return (
//     <div className={`item-panel ${isVisible ? 'show' : ''}`}>
//       <div className="item-details">
//         <h1>{selectedItem ? selectedItem.itemName : ''}</h1>
//         <p>Year: {selectedItem ? selectedItem.itemYear : ''}</p>
//       </div>
//       <div className="item-copy">
//         <p>{selectedItem ? selectedItem.itemCopy : ''}</p>
//       </div>
//       <button className="close-button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

// export default ItemPanel;

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
          <p>{selectedItem ? selectedItem.itemCopy : ''}</p>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ItemPanel;

