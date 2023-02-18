import { model, Schema } from "mongoose";

const productSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  codigo: { type: Number, required: true },
  foto: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const cartSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  productos: [productSchema],

  // Usar en addOne (*)
  // productos: { type: Array, required: true },
});

export const Cart = model("cart", cartSchema);
