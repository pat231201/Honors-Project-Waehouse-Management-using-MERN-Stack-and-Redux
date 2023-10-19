// productReducer.js
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // const newProduct = action.payload;

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DELETE_PRODUCT":
      // Filter out the deleted product from the products array
      const delupdatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      return {
        ...state,
        products: delupdatedProducts,
      };
    case "UPDATE_PRODUCT":
      // const updatedProduct = action.payload;
      // // Update the product in the state (assuming you have an array of products)
      // const updatedProducts = state.products.map((product) => {
      //   if (product.id === updatedProduct.id) {
      //     return updatedProduct;
      //   }
      //   return product;
      // });
      // return {
      //   ...state,
      //   products: updatedProducts,
      // };
      // const updatedProduct = action.payload;

      // return {
      //   ...state,
      //   products: state.products.map((product) =>
      //     product.id === updatedProduct.id ? updatedProduct : product
      //   ),
      // };
      const updatedCruds = state.products.map((crud) =>
        crud._id === action.payload._id ? action.payload : crud
      );
      return {
        ...state,
        products: updatedCruds,
      };

    case "FETCH_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
