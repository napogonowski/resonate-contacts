import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactIndexPage from "./pages/ContactIndexPage/ContactIndexPage";
import ContactShowPage from "./pages/ContactShowPage/ContactShowPage";

export default function App() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <main className="App">
      <>
        <Routes>
          <Route path="/home" element={<ContactIndexPage users={users} />} />
          <Route path="/contact" element={<ContactShowPage />} />
          <Route path="/contact/*" element={<ContactShowPage />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </>
    </main>
  );
}
