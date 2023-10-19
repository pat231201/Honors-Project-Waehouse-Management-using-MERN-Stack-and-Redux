import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link, useNavigate, useParams } from "react-router-dom";

import { delProduct, fetchProduct } from "./Product/productAction";

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleDelete = () => {
    dispatch(delProduct(productId));
    // .then(() => {
    // Deletion was successful, navigate to the product list or another page
    navigate("/");
    // })
    // .catch((error) => {
    //   console.error("Error deleting product:", error);
    // });
  };
  return (
    <div className="wrapper">
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete this product?</p>
      <div className="btn-group">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </div>
    </div>
  );
  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch the deleteProduct action with the product ID to delete
    dispatch(delProduct(id));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Product ID</label>
          <input
            type="text"
            name="id"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Delete Product"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteProduct;
