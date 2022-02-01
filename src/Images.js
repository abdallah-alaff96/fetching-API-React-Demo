import { useEffect, useState } from "react";

const Images = () => {
  const [productsArr, setProductsArr] = useState([]);

  // fetch function
  const fetchImgs = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong, no fetched data!!");
    }
    const dataArr = await response.json();
    setProductsArr(dataArr);
    console.log(dataArr);
  };

  useEffect(() => {
    fetchImgs();
  }, []);

  const content = productsArr.map((product) => {
    return (
      <div key={product.id}>
        <h5>{product.title}</h5>
        <p>{product.price}</p>
        <img src={product.image} />
      </div>
    );
  });

  return <>{content}</>;
};

export default Images;
