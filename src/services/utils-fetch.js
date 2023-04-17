const utils = () => {

    const URL = "https://crossover-shop-api-gr2.onrender.com";

    const getProducts = async () => {
        try {
            const res = await fetch(URL+ "/product");
            const json = await res.json();
            return json;
        }
        catch (error) 
            { console.log(error); }      
    }

    return { getProducts };
}

export default utils;
