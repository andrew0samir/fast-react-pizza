import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/"> Fast React Pizza CO.</Link>
      <SearchOrder />
      <p>Logo</p>
    </header>
  );
}

export default Header;
