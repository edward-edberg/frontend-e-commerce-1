import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const {
    products: { products },
    isLoading,
  } = useSelector((store) => store.product);
  console.log(products);

  if (isLoading) {
    return (
      <div className="">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div className="">
        {products.map((product) => {
          return (
            <article>
              <h1>{product.name}</h1>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Products;
