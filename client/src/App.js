import { Route, Routes } from "react-router-dom";
import AddBook from "./AddBook";
import Home from "./Home";
import UnreadBooks from "./UnreadBooks";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unread-books" element={<UnreadBooks />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
