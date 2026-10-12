import { useParams, Link } from "react-router-dom";

export function DishDetailPage() {
  const { id } = useParams(); // Gets the "id" from the URL (/dish/:id)

  return (
    <div>
      <p>Showing details for dish #{id}</p>

      <Link to="/">← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;