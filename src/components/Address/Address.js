import PropTypes from "prop-types";
import React from "react";
import AppCard from "../AppCard/AppCard";

const Address = ({ address }) => {
  const { title, detail } = address;

  return (
    <AppCard title={title}>
      <p>{detail}</p>
    </AppCard>
  );
};

Address.propTypes = {
  address: PropTypes.shape({
    id: PropTypes.number.isRequired,

    title: PropTypes.string.isRequired,

    detail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Address;
