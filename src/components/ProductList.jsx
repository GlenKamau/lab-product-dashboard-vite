import React from "react";
import { Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <Typography>No products available.</Typography>;
  }

  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </Stack>
  );
};

export default ProductList;
