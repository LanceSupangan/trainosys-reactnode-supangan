const Card = ({ title, price, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-price">${price}</h2>
            </div>
        </div>
    );
};

export default Card;