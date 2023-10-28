import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Header() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Ошибка получения данных', error);
        });
    }, []);

}

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default Header;





