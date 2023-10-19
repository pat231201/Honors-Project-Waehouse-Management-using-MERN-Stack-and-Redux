import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addProduct } from "./AddProduct/productAction";
import { addProduct } from "./Product/productAction";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    product_name: "",
    selling_price: "",
    date_of_entry: "",
    date_of_exit: "",
    date_of_expiry: "",
    quantity: "",
    cost_price: "",
  });

  const onChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Dispatch the action to add the product
    dispatch(addProduct(productInfo));

    // Reset the form
    setProductInfo({
      product_name: "",
      selling_price: "",
      date_of_entry: "",
      date_of_exit: "",
      date_of_expiry: "",
      quantity: "",
      cost_price: "",
    });
  };

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Add Product Name</label>
          <input
            type="text"
            name="product_name"
            value={productInfo.product_name}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Selling Price</label>
          <input
            type="number"
            name="selling_price"
            value={productInfo.selling_price}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Date of Entry</label>
          <input
            type="date"
            name="date_of_entry"
            value={productInfo.date_of_entry}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Date Of Exit</label>
          <input
            type="date"
            name="date_of_exit"
            value={productInfo.date_of_exit}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Date Of Expiry</label>
          <input
            type="date"
            name="date_of_expiry"
            value={productInfo.date_of_expiry}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Quantity</label>
          <input
            type="text"
            name="quantity"
            value={productInfo.quantity}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Cost Price</label>
          <input
            type="text"
            name="cost_price"
            value={productInfo.cost_price}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Product"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
