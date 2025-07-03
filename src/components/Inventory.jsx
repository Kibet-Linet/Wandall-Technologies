import React, { useState } from 'react';
import '../css/inventory.css';

const inventoryItems = [
  { id: 1, name: 'Starlink', price: 55000 },
  { id: 2, name: 'Airtel Smartbox', price: 3500 },
  { id: 3, name: 'Hithium battery (Power backup)', price: 35000 },
  { id: 4, name: 'Routers', price: 1500 },
  { id: 5, name: 'Access Points', price: 6500 },
  { id: 6, name: 'Inhouse Cabling', price: null },
  { id: 7, name: 'Receivers', price: 10000 },
  { id: 8, name: 'Internet Billing System', price: 2000 },
  { id: 9, name: 'CCTV Systems', price: null },
  { id: 10, name: 'Biometric Systems', price: null },
  { id: 11, name: 'Network Extenders', price: 5000 },
  { id: 12, name: 'Network Cabinets (Home labs)', price: null },
];

function Inventory({ onClose }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };

  const total = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const message = `Hello, I would like to inquire about the following items:\n\n${selectedItems
    .map((item) => `- ${item.name} (${item.price ? `KES ${item.price}` : 'Price NA'})`)
    .join('\n')}\n\nTotal: KES ${total}`;

  const whatsappLink = `https://wa.me/+254740537572?text=${encodeURIComponent(message)}`;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form inventory-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Select Items to Inquire or Book</h2>

        <div className="product-list">
          {inventoryItems.map((item) => (
            <div
              key={item.id}
              className={`product-card ${item.price === null ? 'disabled' : ''}`}
            >
              <input
                type="checkbox"
                disabled={item.price === null}
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
              />
              <div className="details">
                <h2>{item.name}</h2>
                <p>{item.price !== null ? `KES ${item.price}` : 'Price NA'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-box">
          <h3>Selected Items: {selectedItems.length}</h3>
          <h2>Total: KES {total}</h2>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-button" disabled={selectedItems.length === 0}>
              Inquire / Book via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
