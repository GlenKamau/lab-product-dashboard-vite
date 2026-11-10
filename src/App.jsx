import React, { useState } from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import ProductList from "./components/ProductList";

const initialProducts = [
  { id: 1, name: "Laptop", price: 900, inStock: true },
  { id: 2, name: "Phone", price: 600, inStock: false },
  { id: 3, name: "Tablet", price: 400, inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (filter === "inStock") return product.inStock;
    if (filter === "outOfStock") return !product.inStock;
    return true;
  });

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Container sx={{ py: 4 }}>
      <>
        <Typography variant="h3" component="h1" gutterBottom>
          Product Dashboard
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button variant="contained" onClick={() => setFilter("all")}>
            All Products
          </Button>
          <Button variant="contained" color="success" onClick={() => setFilter("inStock")}>
            In Stock
          </Button>
          <Button variant="contained" color="error" onClick={() => setFilter("outOfStock")}>
            Out of Stock
          </Button>
        </Stack>

        <ProductList products={filteredProducts} onRemove={handleRemove} />
      </>
    </Container>
  );
};

export default App;