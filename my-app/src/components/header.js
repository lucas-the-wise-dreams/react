import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onFilterChange(value);
  };

  const irMenu = () => {
    navigate("/");
  };

  return (
    <div className="bg-danger header-container d-flex justify-content-between px-4 align-items-center">
      <div>
        <img src="../logo192.png" alt="Logo" onClick={irMenu} style={{ width: '120px', height: '120px', cursor: 'pointer', padding: '20px'}} />
      </div>

      <div>
        <input
          type="text"
          className="rounded-3 border-0 px-4 py-2"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default Header;
