import { CartMongoDao } from "../daos/cartMongoDao.js";
import { Cart as CartModel } from "../model/cart.model.js";

const Cart = new CartMongoDao(CartModel);

const getAllProducts = async (req, res) => {
  try {
    const response = await Cart.getAll();
    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

const createCart = async (req, res) => {
  try {
    const response = await Cart.create(req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const createCartNewProductos = async (req, res) => {
  try {
    const response = await Cart.createCartNewProductos(req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.getById(id);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

// const updateCartById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = await Cart.update(id, req.body);
//     if (!response) return res.status(404).send("Producto no encontrado.");
//     res.json(response);
//   } catch (err) {
//     throw new Error(err);
//   }
// };

const deleteCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.delete(id);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

//Nuevo codigo
const addProdToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.addOne(id, req.body);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(`Product added successfully to cart ${id}`);
  } catch (err) {
    console.log(err);
  }
};
const removeProdFromCart = async (req, res) => {
  try {
    const { id, idProd } = req.params;
    const response = await Cart.removeOne(id, idProd);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(`Product removed successfully from cart ${id}, product ${idProd}`);
  } catch (err) {
    console.log(err);
  }
};

const updateProdFromCart = async (req, res) => {
  try {
    const { id, idProd } = req.params;
    const response = await Cart.updateOne(id, idProd, req.body);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(`Product update successfully from cart ${id}, product ${idProd}`);
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id, idProd } = req.params;
    const response = await Cart.getOne(id, idProd);
    if (!response) return res.status(404).send("Producto no encontrado.");
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

export const cartController = {
  getAllProducts,
  createCart,
  getCartById,
  // updateCartById,
  deleteCartById,
  createCartNewProductos,
  addProdToCart,
  removeProdFromCart,
  updateProdFromCart,
  getOneProduct,
};
