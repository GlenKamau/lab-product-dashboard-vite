import React from "react";
import { Button } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={`${styles.productCard} ${
        !product.inStock ? `${styles.outOfStock} outOfStockClass` : ""
      }`}
    >
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;
