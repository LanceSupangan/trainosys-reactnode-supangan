const Rating = ({ value, maximumValue = 5 }) => {
    const filledStars = Math.min(value, maximumValue);
    const emptyStars = maximumValue - filledStars;

    return (
        <div className="rating">
            {'★'.repeat(filledStars).split('').map((star, index) => (
                <span key={`filled-${index}`} className="star filled">{star}</span>
            ))}
            {'☆'.repeat(emptyStars).split('').map((star, index) => (
                <span key={`empty-${index}`} className="star empty">{star}</span>
            ))}
        </div>
    );
};

export default Rating;