import React from 'react';
import Navbar from '../../components/website/navigation/Navbar';
import Footer from '../../components/website/navigation/Footer';
import Sidebar from '../../components/website/products/Sidebar';
import ProductList from '../../components/website/products/ProductList';


const Products = ({type}) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <ProductList type={type}/>
            <Footer />
        </>
    )
}

export default Products