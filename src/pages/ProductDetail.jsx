import { useParams } from "react-router-dom";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const productData = data.filter((item) => item.id === parseInt(id));

  return (
    <div>
      <h1>{productData[0].name}</h1>
      <h1>{productData[0].description}</h1>
      <h1>{productData[0].stock === "true" ? "Stokta var" : "Stokta yok"}</h1>
    </div>
  );
};

export default ProductDetail;
