import PropTypes from "prop-types";
import AppCard from "../AppCard";
import React from "react";

const Product = ({ product }) => (
  <AppCard title={product.name}>
    <p>
      {product.price ? `Precio: ${product.price}€` : "Precio no disponible"}
    </p>

    <p>Etiquetas: {product.tags.join(", ")}</p>
  </AppCard>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,

    name: PropTypes.string.isRequired,

    price: PropTypes.number,

    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Product;
