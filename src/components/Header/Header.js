import "./Header.css";

function Header( { onSearch } ) {
    return (
        <header className="header">
            <div className="brand">Brown Goods</div>
            <input
                className="search"
                type="text"
                placeholder="Поиск..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </header>
    )
}

export default Header;