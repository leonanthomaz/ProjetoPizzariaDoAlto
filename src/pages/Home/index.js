import React from "react";
import Hero from "../../components/Hero";
import Products from '../../components/Products'
import Feature from "../../components/Feature";
import { productData, productDataTwo } from '../../components/Products/data';

const Home = () => {

    return(
        <div>
            <Hero />
            <Products heading='Escolha sua favorita' data={productData} />
            <Feature />
            <Products heading='Ou senão...' data={productDataTwo} />
        </div>
    )
}

export default Home;;