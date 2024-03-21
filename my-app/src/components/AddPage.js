import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/add.css";
import Header from "./header";
import { baseURL } from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const navigate = useNavigate();

  const addTask = (event) => {
    event.preventDefault();

    const objeto = {
      name: input1,
      description: input2,
      stock: input3
    };

    axios.post(`${baseURL}/save`, { objeto }).then((res) => {
      console.log(res.data);

      setInput1("");
      setInput2("");
      setInput3("");

    });

    navigate("/");
    
  };

  return (
    <>
      <Header />
      <Container className="addContainer mt-5">
        <form onSubmit={addTask} className="formulario">
          <div className="inputContainer">
            <h1 className="fs-3">Nombre</h1>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            ></input>
          </div>

          <div className="inputContainer">
            <h1 className="fs-3">Descripción</h1>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            ></input>
          </div>

          <div className="inputContainer">
            <h1 className="fs-3">Stock</h1>
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            ></input>
          </div>

          <Button variant="primary" type="submit" className="w-100">
            Añadir
          </Button>
        </form>
      </Container>
    </>
  );
};

export default AddPage;
