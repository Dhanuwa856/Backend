import Product from "../models/product.js";

// Create a new product (POST)
export const createProduct = async (req, res) => {
  try {
    const { name, price, url, image_url, condition, rating, location } =
      req.body;

    // Create a new Product instance with data from the request body
    const newProduct = new Product({
      name,
      price,
      url,
      image_url,
      condition,
      rating,
      location,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct); // Return the newly created product
  } catch (error) {
    res.status(500).json({ message: "Failed to create product", error });
  }
};

// Get all products (GET)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products); // Return the list of products
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products", error });
  }
};

// Get a product by ID (GET)
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product); // Return the product if found
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve product", error });
  }
};
