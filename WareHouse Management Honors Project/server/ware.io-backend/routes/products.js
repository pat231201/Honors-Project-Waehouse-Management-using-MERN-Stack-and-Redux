const express = require("express");
const router = express.Router();
const crudController = require("../controllers/product_controllers");

router.get("/", crudController.crud_index);
router.post("/add", crudController.crud_create_post);
router.get("/:id", crudController.crud_details);
router.patch("/update/:id", crudController.crud_update);
router.delete("/:id", crudController.crud_delete);

module.exports = router;
