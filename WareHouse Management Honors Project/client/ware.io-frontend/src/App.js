import "./App.css";
import axios from "axios";

import Container from "react-bootstrap/Container";
import store from "./redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import AddProduct from "./redux/AddProduct";

import React, { useState, useEffect } from "react";
import TableRow from "./components/TableRow";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DeleteProduct from "./redux/DeleteProduct";
import Menu from "./components/navbar/Navbar";
import UpdateProduct from "./redux/UpdateProduct";

function App() {
  const [tableInstance, setTableInstance] = useState([]);

  const fetchRowForTable = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");

      setTableInstance(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRowForTable();
  }, [tableInstance]);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            exact
            path="/addProduct"
            element={
              <Provider store={store}>
                <AddProduct />
              </Provider>
            }
          />
          <Route
            exact
            path="/delete/:productId"
            element={
              <Provider store={store}>
                <DeleteProduct />
              </Provider>
            }
          />
          <Route
            exact
            path="/update/:productId"
            element={
              <Provider store={store}>
                <UpdateProduct />
              </Provider>
            }
          />
        </Routes>

        <Container
          fluid
          className="mainCont"
          style={{
            alignContent: "flex-start",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Row style={{ display: "flex", width: "100%", margin: "0" }}>
            <Col style={{ position: "relative" }}>
              <Row
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  padding: "1.5rem 0.7rem 0rem 1.5rem",
                  height: "max-content",
                }}
              ></Row>
              <Row
                style={{
                  justifyContent: "center",
                  display: "flex",
                  gap: "1.5rem",
                  padding: "1.5rem 0.7rem 0rem 1.5rem",
                }}
              ></Row>
              <Row style={{ padding: "1.5rem 0.7rem 0rem 1.5rem" }}>
                <Col className="warePackInfoTable">
                  <Row
                    style={{
                      backgroundColor: "#E5f4ff",
                      borderRadius: "0.5rem 0.5rem 0rem 0rem",
                      border: "0.1rem solid #7999B1",
                      padding: "1rem",
                    }}
                  >
                    {/* <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Product ID</span>
                    </Col> */}
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Name</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Entry</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Exit</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Expiry</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Stock</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Cost Price</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      {/* <Col></Col> */}
                      <span style={{ padding: "0.5rem" }}>Selling Price</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Edit Product</span>
                    </Col>
                    <Col style={{ display: "flex", justifyItems: "center" }}>
                      <span style={{ padding: "0.5rem" }}>Delete Product</span>
                    </Col>
                  </Row>
                  {tableInstance.map((item, index) => (
                    <TableRow key={index} item={item} />
                  ))}

                  <Row
                    style={{
                      backgroundColor: "#E5f4ff",
                      borderRadius: "0rem 0rem 0.5rem 0.5rem",
                      borderTop: "none",
                      border: "0.1rem solid #7999B1",
                      padding: "1rem",
                      marginBottom: "1.5rem",
                    }}
                  ></Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
