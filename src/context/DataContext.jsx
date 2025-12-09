import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=150");
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (arr, property) => {
    if (!Array.isArray(arr)) return ["All"];
    const values = arr
      .map(item => item?.[property])
      .filter(Boolean);
    return ["All", ...new Set(values)];
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
