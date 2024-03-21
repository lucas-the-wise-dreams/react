import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/add.css";
import Header from "./header";
import { useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../utils/constants";
import axios from "axios";

const UpdatePage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.taskContent) {
      const { taskContent } = location.state;
      setInput1(taskContent.name);
      setInput2(taskContent.description);
      setInput3(taskContent.stock);
      console.log(taskContent._id);
    }
  }, [location.state]);

  const updateTask = (event) => {
    event.preventDefault();
    const { taskContent } = location.state;

    const objeto = {
      name: input1,
      description: input2,
      stock: input3,
    };

    console.log(objeto);

    axios
      .put(`${baseURL}/update/${taskContent._id}`, { objeto })
      .then((res) => {
        console.log(res.data);

        setInput1("");
        setInput2("");
        setInput3("");

        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating task:", err);
      });
  };

  return (
    <>
      <Header />
      <Container className="addContainer mt-5">
        <form onSubmit={updateTask} className="formulario">
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
            Actualizar
          </Button>
        </form>
      </Container>
    </>
  );
};

export default UpdatePage;
