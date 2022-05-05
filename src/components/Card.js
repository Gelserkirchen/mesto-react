function Card({ cardData, onCardClick }) {
    function handleClick(e) {
        const link = e.target.src;
        const name = e.target.alt;
        onCardClick({ link, name });
    }

    return (
        <div className="card">
            <button className="card__delete-button" type="button"></button>
            <img src={cardData.link} className="card__image" alt={cardData.name} onClick={
                (e) => { handleClick(e) }
            } />
            <div className="card__description">
                <h2 className="card__text">{cardData.name}</h2>
                <div className="card__like-section">
                    <button className="card__like-button" type="button"></button>
                    <span className="card__like-number">{cardData.likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;