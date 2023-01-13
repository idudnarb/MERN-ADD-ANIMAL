import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddAnimal from "../src/components/Form/AddAnimal.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="add" element={<AddAnimal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
