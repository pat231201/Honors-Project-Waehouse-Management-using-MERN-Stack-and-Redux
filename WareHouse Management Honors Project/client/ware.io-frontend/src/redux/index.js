// index.js
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import productReducer from "../redux/AddProduct/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import delProductReducer from "./DeleteProduct/delProductReducer";
// import updateProductReducer from "./UpdateProduct/updateProductReducer";
import { logger } from "redux-logger";
import productReducer from "./Product/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  // deletedProducts: delProductReducer,
  // updatedProducts: updateProductReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
