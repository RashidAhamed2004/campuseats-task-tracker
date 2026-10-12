import { useState } from "react";
import MenuList from "../components/MenuList";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";


const API_BASE = import.meta.env.VITE_API_URL;
const menuUrl = API_BASE ? `${API_BASE}/api/menu` : "/menu.json";

function MenuPage() {
  const [query, setQuery] = useState("");

  const debounced = useDebounce(query, 400);

  const {
    data: dishes,
    isLoading,
    error,
  } = useFetch(menuUrl);

  if (isLoading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p>Could not load menu: {error}</p>;
  }

  const filtered = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(debounced.toLowerCase())
  );

  return (
    <div>
      

      <input
        type="text"
        placeholder="Search dishes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;
