import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Products from "../Components/Products";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories")
      .then((data) => setCategories(data.data.data))
      .catch((err) => console.log(err));

      getAllProducts()
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
      <div className="flex">
        <div className="h-10 p-2 my-2 mx-auto bg-gray-400 rounded-md flex">
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
          {/* <div className='text-white w-28 text-center'>Завтраки</div>
                    <div className='text-white w-28 text-center'>Сэндвичи</div>
                    <div className='text-white w-28 text-center'>Салаты</div>
                    <div className='text-white w-28 text-center'>Паста</div>
                    <div className='text-white w-28 text-center'>Стейки</div>
                    <div className='text-white w-28 text-center'>Гарниры</div> */}
        </div>
        {/* <div class="relative">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10">
                        Dropdown
                    </button>
                    <ul class="absolute bg-white text-gray-700 pt-1">
                        <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
                        <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
                        <li><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3</a></li>
                    </ul>
                </div> */}
        {/* <div className="navbar-item">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="rounded-xl py-2 px-3 focus:outline-none"
                                type="search"
                                placeholder="Find a product" />
                        </div>
                    </div>
                </div> */}
      </div>
      <Products className="z-0" products={products} />
    </Layout>
  );
}
