import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { updateProduct } from "./Product/productAction";
import { useParams, useNavigate, Link } from "react-router-dom";
// const UpdateProduct = () => {
//   const dispatch = useDispatch();

//   const { productId } = useParams();

//   const productDetails = useSelector((state) => {
//     // Replace 'productDetails' with the actual selector to retrieve product data
//     return state.productData.productDetails; // Modify this selector accordingly
//   });

//   useEffect(() => {
//     // If productDetails are available, set the form fields
//     if (productDetails) {
//       setProductInfo(productDetails);
//     }
//   }, [productDetails]);

//   const [productInfo, setProductInfo] = useState({
//     id: "",
//     product_name: "",
//     selling_price: "",
//     date_of_entry: "",
//     date_of_exit: "",
//     date_of_expiry: "",
//     quantity: "",
//     cost_price: "",
//   });

//   // useEffect(() => {
//   //   dispatch(fetchProduct(productId));
//   // }, [dispatch, productId]);

//   // useEffect(() => {
//   //   setProductInfo(productInfo); // Assuming your reducer stores the product details
//   // }, [productInfo]);

//   const onChange = (e) => {
//     setProductInfo({
//       ...productInfo,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     // Dispatch the action to update the product
//     dispatch(updateProduct(productInfo));

//     // Reset the form
//     setProductInfo({
//       id: "",
//       product_name: "",
//       selling_price: "",
//       date_of_entry: "",
//       date_of_exit: "",
//       date_of_expiry: "",
//       quantity: "",
//       cost_price: "",
//     });
//   };

//   {
//     return (
//       <div className="wrapper">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <label>Add Product ID</label>
//             <input
//               type="text"
//               name="id"
//               value={productInfo.id}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Product Name</label>
//             <input
//               type="text"
//               name="product_name"
//               value={productInfo.product_name}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Selling Price</label>
//             <input
//               type="number"
//               name="selling_price"
//               value={productInfo.selling_price}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Date of Entry</label>
//             <input
//               type="date"
//               name="date_of_entry"
//               value={productInfo.date_of_entry}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Date Of Exit</label>
//             <input
//               type="date"
//               name="date_of_exit"
//               value={productInfo.date_of_exit}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Date Of Expiry</label>
//             <input
//               type="date"
//               name="date_of_expiry"
//               value={productInfo.date_of_expiry}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Quantity</label>
//             <input
//               type="text"
//               name="quantity"
//               value={productInfo.quantity}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label>Add Cost Price</label>
//             <input
//               type="text"
//               name="cost_price"
//               value={productInfo.cost_price}
//               onChange={onChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="submit"
//               value="Update Product"
//               className="btn btn-success btn-block"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// };

// export default UpdateProduct;
const UpdateProduct = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    product_name: "",
    selling_price: "",
    date_of_entry: "",
    date_of_exit: "",
    date_of_expiry: "",
    quantity: "",
    cost_price: "",
  };
  const [crud, setCrud] = useState(initialState);
  useEffect(
    function () {
      async function updateCrud() {
        try {
          const response = await axios.get(
            `http://localhost:5000/products/${productId}`
          );
          setCrud(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updateCrud();
    },

    []
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    async function updateCrud() {
      try {
        dispatch(updateProduct(crud));
        navigate(`/update/${productId}`);
      } catch (error) {
        console.error(error);
      }
    }
    updateCrud();
  };
  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Product ID</label>
          <input
            type="text"
            name="id"
            value={crud._id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Product Name</label>
          <input
            type="text"
            name="product_name"
            value={crud.product_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Selling Price</label>
          <input
            type="number"
            name="selling_price"
            value={crud.selling_price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* <div className="form-group">
          <label>Add Date of Entry</label>
          <input
            type="date"
            name="date_of_entry"
            value={crud.date_of_entry}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Date Of Exit</label>
          <input
            type="date"
            name="date_of_exit"
            value={crud.date_of_exit}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Date Of Expiry</label>
          <input
            type="date"
            name="date_of_expiry"
            value={crud.date_of_expiry}
            onChange={handleChange}
            className="form-control"
          />
        </div> */}
        <div className="form-group">
          <label>Add Quantity</label>
          <input
            type="text"
            name="quantity"
            value={crud.quantity}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Add Cost Price</label>
          <input
            type="text"
            name="cost_price"
            value={crud.cost_price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mt-4">
          <button
            type="submit"
            value="Update Product"
            className="btn btn-success btn-block"
          >
            Update{" "}
          </button>{" "}
          <Link to="/" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};
export default UpdateProduct;
