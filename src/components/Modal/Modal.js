import "./Modal.css";
import { useEffect } from "react";

function Modal({ product, onClose}) {
    useEffect(()=> {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
    };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);
    if (!product) return null;

    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <button className="closeButton" onClick={onClose}>×</button>

                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <p className="price">
                    {product.price.toLocaleString("ru-RU")} ₽
                </p>

                <button className="buyButton">Купить</button>
            </div>
        </div>
    )
}

export default Modal;