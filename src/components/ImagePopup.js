function ImagePopup() {
    return (
        <section className="popup image-popup">
            <div className="image-popup__container">
                <button className="popup__close-button" type="button"></button>
                <img className="image-popup__picture" src="#" alt="#" />
                <p className="image-popup__description"></p>
            </div>
        </section>
    );
}

export default ImagePopup; 