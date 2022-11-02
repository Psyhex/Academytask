import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Item } from "./pages/Item";
import { Add_item } from "./pages/Add_item";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Item" element={<Item />} />
        <Route path="/Item/:id" element={<Item />} />
        <Route path="/Add_item" element={<Add_item />} />
      </Routes>
  );
}

export default App;
