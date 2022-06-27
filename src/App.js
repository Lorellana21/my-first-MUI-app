import React from "react";
import AppHeader from "./components/AppHeader";
import Product from "./components/Product";
import Address from "./components/Address";
import productsData from "./mocks/products.json";
import addressData from "./mocks/address.json";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <AppHeader />

      <Container>
        <Typography mt={3} variant="h6">
          Lista de productos
        </Typography>

        {productsData.map((item) => (
          <Product key={item.id} product={item} />
        ))}

        <Typography mt={3} variant="h6">
          Lista de direcciones de envío
        </Typography>

        {addressData.map((item) => (
          <Address key={item.id} address={item} />
        ))}
      </Container>
    </>
  );
}

export default App;
