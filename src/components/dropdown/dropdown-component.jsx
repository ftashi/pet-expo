import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../menu-items/menu-items.component";
import './dropdown.styles.css';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              onClick={() => setClick(false)} 
              className="dropdown-link" 
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;



