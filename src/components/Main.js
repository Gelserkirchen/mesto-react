import { useEffect, useState, useContext } from 'react';
import { api } from '../utils/api.js'
import Card from '../components/Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
            api.deleteCard(card._id).then((data) => {
                setCards((cards) => cards.filter((c) => {return c._id !== card._id}))
            }
        );
    }

    useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res)
            })
            .catch((err) => {
                console.log('Ошибка загрузки данных карточек', err)
            })

    }, [])

    return (
        <main className="content">
            <section className="profile">
                <a style={{ backgroundImage: `url(${currentUser.avatar})` }} href="#" className="profile__avatar" alt="Аватар" onClick={onEditAvatar}></a>
                <div className="profile__info">
                    <div className="profile__name-section">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="cards">
                {
                    cards.map((card) => {
                        return <Card cardData={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} key={card._id} />
                    })
                }
            </section>
        </main>
    );
}

export default Main; 