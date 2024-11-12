const Alert = ({ title, type, message }) => {
    const alertClass = `alert alert-${type}`;

    return (
        <div className={alertClass}>
            <h2 className="alert-title">{title}</h2>
            {message && <h2 className="alert-message">{message}</h2>}
        </div>
    );
};

export default Alert;