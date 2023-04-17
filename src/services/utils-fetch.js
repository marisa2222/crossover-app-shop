const utils = () => {

    const URL = "https://crossover-shop-api-gr2.onrender.com/";

    const getProducts = async () => {
        try {
            console.log("Hello from getProducts")
            const res = await fetch(URL);
            const json = await res.json();
            return json;
        }
        catch (error) 
            { console.log(error); }      
    }

    return { getProducts };
}

export default utils;
