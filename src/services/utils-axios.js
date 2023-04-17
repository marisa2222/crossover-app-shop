import axios from "axios";

const utils = () => {
  const URL = "https://crossover-shop-api-gr2.onrender.com";

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${URL}/product`);
      console.log("utils getProducts: " + data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getProducts };
};

export default utils;
