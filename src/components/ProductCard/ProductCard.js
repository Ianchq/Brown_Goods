import "./ProductCard.css";

function ProductCard({ title, price, image }) {
    const formattedPrice = price.toLocaleString("ru-RU");

    return (
        <div className="ProductCard">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <div className="bottomRow">
                <span className="price">{formattedPrice} ₽</span>
                <button className="cartButton">🛒</button>
            </div>
        </div>
    );
}

export default ProductCard;