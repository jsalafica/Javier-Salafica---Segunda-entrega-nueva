import { Router } from "express";
import { productRouter } from "./product.route.js";
import { cartRouter } from "./cart.route.js";

const router = Router();

router.use("/product", productRouter);
router.use("/cart", cartRouter);

export default router;
