// En Menu.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/tarjeta.css";
import Header from "./header";
import axios from "axios";
import { baseURL } from "../utils/constants";
import List from "./List";

const Menu = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]); // Nuevo estado para las tareas filtradas
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
      setFilteredTasks(res.data); // Inicialmente, las tareas filtradas son las mismas que las tareas
    });
  }, [updateUI]);

  const handleAddClick = () => {
    navigate("/add");
  };

  const handleFilterChange = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <>
      <Header onFilterChange={handleFilterChange} />
      <Container className="no-select container-prueba">
        <Row className="d-flex justify-content-center">
          <Col className="">
            <Row className="d-flex justify-content-end align-items-center py-2">
              <Button
                className="bg-danger w-auto me-4"
                onClick={handleAddClick}
              >
                Añadir
              </Button>
            </Row>
            <Row className="">
              <ul className="border d-flex justify-content-center flex-column align-items-center">
                {filteredTasks.map((task) => (
                  <List
                    key={task._id}
                    id={task._id}
                    task={task.name}
                    setUpdateUI={setUpdateUI}
                  />
                ))}
              </ul>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
