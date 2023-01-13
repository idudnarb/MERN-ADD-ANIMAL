import React, { useState } from "react";
import axios from "axios";
import { Paper, TextField, Button, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddAnimal() {
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const navigate = useNavigate();

  const addAnimal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/items", {
        Name,
        Image,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper
      sx={{ width: "600px", height: "300px", marginX: "auto" }}
      elevation={3}
    >
      <form onSubmit={addAnimal} className="form-container">
        <div className="form-column">
          <TextField
            value={Name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            variant="outlined"
            label="Name"
            required
          />
        </div>
        <div className="form-column">
          <TextField
            value={Image}
            onChange={(e) => setImage(e.target.value)}
            name="image"
            type="text"
            variant="outlined"
            label="Image"
            required
          />
        </div>
        <Button type="submit" variant="contained">
          Add Animal
        </Button>
      </form>
    </Paper>
  );
}

export default AddAnimal;
