import PropTypes from "prop-types";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

const AppCard = (props) => {
  return (
    <Box my={3}>
      <Card>
        <CardHeader title={props.title} />

        <CardContent>{props.children}</CardContent>
      </Card>
    </Box>
  );
};

AppCard.propTypes = {
  children: PropTypes.node.isRequired,

  title: PropTypes.string.isRequired,
};

export default AppCard;
