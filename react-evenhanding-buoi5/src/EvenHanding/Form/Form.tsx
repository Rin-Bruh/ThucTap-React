import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Data:', formData);
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">User Information Form</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
