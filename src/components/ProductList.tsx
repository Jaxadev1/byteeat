import ShoppingChartProduct from "../assets/icons/ShoppingChartProduct";

type ProductListProps = {
  list: {
    id: number;
    name: string;
    categoryId: number;
    price: number;
    image: string;
    categoryName: string
  }[];
};

const ProductList: React.FC<ProductListProps> = ({ list }) => {
  console.log(list);

  if (!list.length) {
    return <p>No products available for this category.</p>;
  }

  return (
    <div className="product-list productlist">
      {list.map((product) => (
        <div key={product.id} className="product-card">
          <p></p>
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
          <div className="product-card-box">
            <h4 className="product-card-name">{product.name}</h4>
            <p className="product-card-price">Narxi: {product.price}so'm</p>
            <button className="product-card-btn" style={{justifyContent: "center", alignItems: "center", display: "flex"}}><p>Add to chart</p> <ShoppingChartProduct/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
