import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  codigo: { type: Number, required: true },
  foto: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});
const cartSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  productos: [{ ProductSchema }],
});

export const Cart = model("cart", cartSchema);
