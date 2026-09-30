import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { validateAddToCart } from "../validator/cart.validator.js";
import { addTocart, getCart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddToCart,
  addTocart,
);

router.get("/", authenticateUser, getCart);

export default router;
