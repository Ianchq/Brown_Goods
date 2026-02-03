import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="brand">Brown Goods</div>
            <input
                className="search"
                type="text"
                placeholder="Поиск..."
            />
        </header>
    )
}

export default Header;