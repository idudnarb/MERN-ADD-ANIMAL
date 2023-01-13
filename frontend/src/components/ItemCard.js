import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ItemCard({ item }) {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     p: 1,
    //     m: 1,

    //     maxWidth: 300,
    //     borderRadius: 1,
    //   }}
    // >
    <Card sx={{ maxWidth: 1745 }}>
      <CardMedia
        sx={{ height: 200, width: 250 }}
        image={item.Image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.Name}
        </Typography>
      </CardContent>
    </Card>
    // </Box>
  );
}

export default ItemCard;
