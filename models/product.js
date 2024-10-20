import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose.connection);

const productSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  price: { type: String, required: true },
  url: { type: String, required: true },
  image_url: { type: String, required: true },
  condition: { type: String },
  rating: { type: String },
  location: { type: String },
});

productSchema.plugin(AutoIncrement, { inc_field: "product_id" });
const Product = mongoose.model("Product", productSchema);

export default Product;
