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
  // .put(cartController.updateCartById)
  .delete(cartController.deleteCartById);

router.route("/:id/product").post(cartController.addProdToCart);

router
  .route("/:id/product/:idProd")
  .get(cartController.getOneProduct)
  .delete(cartController.removeProdFromCart)
  .put(cartController.updateProdFromCart);

export const cartRouter = router;
