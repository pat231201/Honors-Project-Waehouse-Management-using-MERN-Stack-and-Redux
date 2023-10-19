import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import UpdateProduct from "../redux/UpdateProduct";

function TableRow(item) {
  const navigate = useNavigate();

  const delButtonHandler = () => {
    navigate(`/delete/${item.item._id}`);
  };

  const updateButtonHandler = () => {
    navigate(`/update/${item.item._id}`);
    console.log(item.item._id);
  };
  return (
    <Row
      style={{
        backgroundColor: "#E5f4ff",
        borderTop: "none",
        border: "0.1rem solid #7999B1",
        borderTops: "none",
        borderBottom: "none",
        padding: "0.5rem",
      }}
    >
      <Col className="warePackInfoTable">
        <Row style={{ padding: "1rem" }}>
          {/* <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item._id}</span>
          </Col> */}
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.product_name}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.date_of_entry}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.date_of_exit}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>
              {item.item.date_of_expiry}
            </span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.quantity}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.cost_price}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>{item.item.selling_price}</span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>
              {" "}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={updateButtonHandler}
              >
                Edit Product
              </button>
            </span>
          </Col>
          <Col style={{ display: "flex", justifyItems: "center" }}>
            <span style={{ padding: "0.5rem" }}>
              {" "}
              <button
                type="button"
                className="btn btn-danger"
                onClick={delButtonHandler}
              >
                Delete Product
              </button>
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default TableRow;
