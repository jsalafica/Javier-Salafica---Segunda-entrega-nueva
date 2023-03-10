import { model, Schema } from "mongoose";

const productSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  codigo: { type: Number, required: true },
  foto: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const Product = model("product", productSchema);
