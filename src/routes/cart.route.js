import { Router } from "express";
import { cartController } from "../controllers/cart.controller.js";

const router = Router();

router
  .route("/")
  .get(cartController.getAllProducts)
  .post(cartController.createCart);

router
  .route("/:id")
  .get(cartController.getCartById)
  .put(cartController.updateCartById)
  .delete(cartController.deleteCartById);

export const cartRouter = router;
