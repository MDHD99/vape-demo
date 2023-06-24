import { useState } from "react";
import TopBanner from "./components/top-banner";
import ProductSection from "./components/product-section";
import './index.css'

function Landing() {
  const [filter, setFilter] = useState("All")
  return (
    <div className="Landing">
        <TopBanner />
        <div className="PurpleRectangle">{filter}</div>
        <ProductSection currentFilter={filter} onFilterChange={setFilter} />
    </div>
  );
}

export default Landing;
