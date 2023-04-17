import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    return (
        <>
        <Header />
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
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