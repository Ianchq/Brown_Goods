import "./ProductCard.css";

function ProductCard({ title, price, image, onClick }) {
    const formattedPrice = price.toLocaleString("ru-RU");

    return (
        <div className="ProductCard" onClick={onClick}>
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <div className="bottomRow">
                <span className="price">{formattedPrice} ₽</span>
                <button
                    className="cartButton"
                    onClick={ (e) => e.stopPropagation() }
                >
                    🛒
                </button>
            </div>
        </div>
    );
}

export default ProductCard;