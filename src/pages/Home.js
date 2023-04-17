import React from 'react';
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';
import utils from '../services/utils-fetch.js';

const Home = () => {
    const [products, setProducts] = useState([]);
    const { getProducts } = utils();

    useEffect(() => {
        getProducts().then(data => {
            console.log(data);
            setProducts(data);
        });
    }, []);

    return (
        <>
        <Header />
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            products.map((item) => (
                                <ProductsCard key={item._id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
              <Cart />
        </>
    );
};

export default Home;