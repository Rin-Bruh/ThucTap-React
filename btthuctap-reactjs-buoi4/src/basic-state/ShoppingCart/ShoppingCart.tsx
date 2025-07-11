import React, { useState } from 'react';
import './ShoppingCart.css';

interface Product {
  id: number;
  name: string;
}

const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleAddProduct = () => {
    if (inputValue.trim() === '') return;

    const newProduct: Product = {
      id: Date.now(),
      name: inputValue.trim(),
    };

    setItems([...items, newProduct]);
    setInputValue('');
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id: number, currentName: string) => {
    setEditingId(id);
    setEditValue(currentName);
  };

  const handleSaveEdit = (id: number) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, name: editValue.trim() } : item
    ));
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div className="shopping-cart">
      <h2>🛒 Shopping Cart</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(item.id)}>💾 Save</button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <button onClick={() => handleEdit(item.id, item.name)}>✏️ Edit</button>
                <button onClick={() => handleDelete(item.id)}>🗑 Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter product name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
