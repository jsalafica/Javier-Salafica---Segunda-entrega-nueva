import { ProductMongoDao } from "../daos/productMongoDao.js";
import { Product as ProductModel } from "../model/product.model.js";

const Product = new ProductMongoDao(ProductModel);

const getAllProducts = async (req, res) => {
  try {
    const response = await Product.getAll();
    res.json(response);
  } catch (err) {
    throw new Error();
  }
};

const createProduct = async (req, res) => {
  try {
    const response = await Product.create(req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.getById(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.update(id, req.body);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.delete(id);
    res.json(response);
  } catch (err) {
    throw new Error(err);
  }
};

export const productController = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
