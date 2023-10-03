import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Products from "../components/Products";
import { motion } from "framer-motion";
import WallpaperCarousel from "../Components/WallpaperCarousel";
import axios from "axios";

const Landing = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories")
      .then((data) => setCategories(data.data.data))
      .catch((err) => console.log(err));

    getAllProducts();
  }, []);

  function getAllProducts() {
    axios
      .get(
        "http://localhost:1337/api/products?populate=category&populate=brand&populate=image"
      )
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err));
  }

  const filter = (filters) => {
    axios
      .get(
        "http://localhost:1337/api/products?populate=category&populate=brand&populate=image" +
          `&filters[${filters.key}][title][$eq]=${filters.value}`
      )
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <Layout className="min-h-[747px]">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <WallpaperCarousel>
          <div
            className={`flex items-center justify-center select-none w-full h-full bg-[url('/pizza.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`flex items-center justify-center select-none w-full h-full bg-[url('/salat.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`flex items-center justify-center select-none w-full h-full bg-[url('/soup.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`flex items-center justify-center select-none w-full h-full bg-[url('/waffles.jpg')] bg-center bg-cover`}
          ></div>
        </WallpaperCarousel>
      </motion.div>
      <div className="min-h-[747px] mt-5">
        <div className="flex">
          <div
            className="h-10 p-2 my-2 mx-auto bg-gray-400 rounded-md flex"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={getAllProducts}
              className="text-white text-center mx-3 cursor-pointer"
            >
              Все продукты
            </div>
            {categories?.map((category) => (
              <div
                onClick={() =>
                  filter({ key: "category", value: category.attributes.title })
                }
                className="text-white text-center mx-3 cursor-pointer"
                key={category.id}
              >
                {category.attributes.title}
              </div>
            ))}
          </div>
        </div>
        <Products className="z-0" products={products} />
      </div>
    </Layout>
  );
};

export default Landing;
