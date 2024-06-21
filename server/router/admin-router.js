const adminController = require("../controllers/admin-controller");
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.getAllUsers);

// edit part
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

// update user
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;
