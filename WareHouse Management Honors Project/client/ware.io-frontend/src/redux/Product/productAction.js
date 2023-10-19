// productActions.js
import axios from "axios";

export const addProduct = (productObject) => {
  return (dispatch) => {
    // Send a POST request to your backend API
    axios
      .post("http://localhost:5000/products/add", productObject)
      .then((res) => {
        // Dispatch an action to update the Redux store with the new product
        dispatch({
          type: "ADD_PRODUCT",
          payload: res.data, // Assuming your API returns the newly created product
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const delProduct = (_id) => (dispatch) => {
  // Send a DELETE request to your backend API with the productId
  axios
    .delete(`http://localhost:5000/products/${_id}`)
    .then((res) => {
      // Dispatch the action with the deleted product's ID as payload
      dispatch({
        type: "DELETE_PRODUCT",
        payload: _id,
      });
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const updateProduct = (product) => {
//   return (dispatch) => {
//     axios
//       .post(`http://localhost:5000/products/update/${product.id}`, product)
//       .then((res) => {
//         dispatch({
//           type: "UPDATE_PRODUCT",
//           payload: res.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
//updateProduct action
export const updateProduct = (product) => {
  return (dispatch) => {
    axios
      .patch(`http://localhost:5000/products/update/${product._id}`, product)
      .then((res) => {
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/${productId}`
      );
      dispatch({ type: "FETCH_PRODUCT", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};
//
