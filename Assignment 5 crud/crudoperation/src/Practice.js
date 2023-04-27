import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      const newData = { name, address, city };
      setData([...data, newData]);
      localStorage.setItem('data', JSON.stringify([...data, newData]));
    } else {
      const newData = [...data];
      newData[editIndex] = { name, address, city };
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
      setEditIndex(null);
    }
    setName('');
    setAddress('');
    setCity('');
  };

  const handleEdit = (index) => {
    const item = data[index];
    setName(item.name);
    setAddress(item.address);
    setCity(item.city);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

        <button type="submit">{editIndex === null ? 'Add' : 'Update'}</button>
      </form>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Address: {item.address}</p>
            <p>City: {item.city}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
