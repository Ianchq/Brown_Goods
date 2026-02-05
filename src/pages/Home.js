import Header from "../components/Header/Header";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import { fetchProducts } from "../api/productsAPI";

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Header onSearch={setSearch} />
            <ProductGrid
                products={filteredProducts}
                onSelect={setSelectedProduct} />
            <Modal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}

export default Home;