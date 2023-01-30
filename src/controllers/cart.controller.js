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

const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.getById(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const updateCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.update(id, req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Cart.delete(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const cartController = {
  getAllProducts,
  createCart,
  getCartById,
  updateCartById,
  deleteCartById,
};
