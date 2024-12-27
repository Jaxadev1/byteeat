import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductList from "../components/ProductList";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";

type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  image: string;
  categoryName: string;
};

const Categories: React.FC = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    Category[]
  >({
    queryFn: () =>
      fetch("https://285f106ea8d3b1af.mokky.dev/categories").then((res) =>
        res.json()
      ),
    queryKey: ["categories"],
  });

  const { data: products, isLoading: isProductsLoading } = useQuery<Product[]>({
    queryFn: () =>
      fetch("https://285f106ea8d3b1af.mokky.dev/products").then((res) =>
        res.json()
      ),
    queryKey: ["products"],
  });

  if (isCategoriesLoading || isProductsLoading) {
    return <div>Loading...</div>;
  }

  if (!categories?.length) {
    return <div>No categories available.</div>;
  }

  if (!products?.length) {
    return <div>No products available.</div>;
  }

  return (
    <div className="categories">
      {/* Navigatsiya paneli */}
       <nav style={{ position: "sticky", top: 0, backgroundColor: "white", zIndex: 1000 }}>
        <ul style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", listStyle: "none" }}>
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`section-${category.id}`}
                smooth={true}
                duration={500}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Kategoriya va mahsulotlar */}
      {categories.map((category) => (
        <div
          key={category.id}
          id={`section-${category.id}`}
          style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
        >
          <Typography variant="h5" gutterBottom>
            {category.name}
          </Typography>
          <ProductList
            list={products.filter((product) => product.categoryId === category.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
