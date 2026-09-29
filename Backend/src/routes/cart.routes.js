import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware";
import { validateAddToCart } from "../validator/cart.validator";
import { addTocart, getCart } from "../controllers/cart.controller";

const router = express.Router();

router.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddToCart,
  addTocart,
);

router.get("/", authenticateUser, getCart);

export default router;
