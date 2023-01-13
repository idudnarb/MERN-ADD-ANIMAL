import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Box from "@mui/material/Box";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
    // console.log("check");
  }, []);

  const getItems = async () => {
    const response = await axios.get("http://localhost:5000/items");
    setItems(response.data);
    console.log(items);
  };

  return (
    <div>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        sx={{ justifyContent: "center", height: "100%" }}
      >
        {items.map((item, index) => (
          <ItemCard item={item} key={item._id} />
        ))}
      </Box>
    </div>
  );
};

export default ItemList;
