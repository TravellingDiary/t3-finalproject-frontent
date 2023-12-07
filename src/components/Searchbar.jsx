import "../styling/Searchbar.css"

function Searchbar() {
    return (
        <div className="searchbar-container">
            <i  className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search blogs by username or location" className="searchbar-input" />
        </div>
    )
}

export default Searchbar;